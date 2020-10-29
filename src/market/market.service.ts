import { Model } from 'mongoose';
import { Get, HttpException, HttpStatus, Inject, Injectable, Post } from '@nestjs/common';
import { Market, MarketDocument } from './schemas/market.schema';
import { CreateMarketDto } from './dto/create-market.dto';


@Injectable()
export class MarketService {
    constructor(
        @Inject('MARKET_MODEL')
        private marketModel: Model<MarketDocument>,
      ) {}
      
    // Post -> 회원가입하기
    async createMarket(createMarketDto: CreateMarketDto): Promise<Market> {
      console.log(createMarketDto);
      
        const market: MarketDocument | null = await this.marketModel.findOne({ email: createMarketDto.email });
        if(!market){
          const createdMarket = await this.marketModel.create(createMarketDto);
          createdMarket.allowStatus = '입점 심사 중';
          createdMarket.rejectReason = '';
          return createdMarket.save();
        } else {
          throw new HttpException('이미 가입된 유저입니다.', HttpStatus.FORBIDDEN)
      }
    }

    async findAll(): Promise<Market[]> {
      return this.marketModel.find().exec();
    }
}