import { Model } from 'mongoose';
import { Inject, Injectable, Post } from '@nestjs/common';
import { Market, MarketDocument } from './schemas/market.schema';
import { CreateMarketDto } from './dto/create-market.dto';


@Injectable()
export class MarketService {
    constructor(
        @Inject('MARKET_MODEL')
        private marketModel: Model<MarketDocument>,
      ) {}

    async createMarket(createMarketDto: CreateMarketDto): Promise<Market> {
        const createdMarket = await this.marketModel.create(createMarketDto);
        console.log(createMarketDto);
        return createdMarket.save();
    }

    async getOne(id: string): Promise<Market> {
        const market = this.marketModel.findOne({ userId: id }).exec();
        return market;
      }
}