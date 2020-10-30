import { Model } from 'mongoose';
import { Get, HttpException, HttpStatus, Inject, Injectable, Post } from '@nestjs/common';
import { Market, MarketDocument } from './schemas/market.schema';
import { CreateMarketDto } from './dto/create-market.dto';
import { request } from 'http';
import { NextFunction } from 'express';
import { UpdateMarketDto } from './dto/updata-market.dto';


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
          createMarketDto.allowStatus = '입점 심사중';
          const createdMarket = await this.marketModel.create(createMarketDto);
          createdMarket.rejectReason = '';
          return createdMarket.save();
        } else {
          throw new HttpException('이미 가입된 유저입니다.', HttpStatus.FORBIDDEN)
      }
    }

    // Put -> 마켓정보 수정하기
    async modifyMarketInfo(updateMarketDto: UpdateMarketDto): Promise<Market> {
      const { marketId,phone, introduce, agreeTerms, agreePrivateInfo, agreeMarketingInfo, tags } = updateMarketDto;
      const market = await this.marketModel.findById(marketId);
      if(market){
        market.phone = phone;
        market.introduce = introduce;
        market.tags = tags;
        market.agreeMarketingInfo = agreeMarketingInfo;
        market.agreePrivateInfo = agreePrivateInfo;
        market.agreeTerms = agreeTerms;
        return market.save();
      }
    }

    // Get -> 서비스화면에서 최근 마켓 4개 보여주기
    async getNewFourMarkets(): Promise<Market[]> {
      const marketList: MarketDocument[] = await this.marketModel.find({ allowStatus: '입점 허가'})
          .sort('-createdAt')
          .limit(4)
          .select('name');
          return marketList;
    }
}