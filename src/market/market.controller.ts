import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MarketService } from './market.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { Market } from './schemas/market.schema';
import { UpdateMarketDto } from './dto/updata-market.dto';

@Controller('market')

export class MarketController {
    constructor(private readonly marketService: MarketService) {}

    //회원가입하기
    @Post()
    async create(@Body() createMarketDto: CreateMarketDto): Promise<Market>{
       return this.marketService.createMarket(createMarketDto);
    }

    //마켓정보 수정하기
    @Put()
    async modifyMarketInfo(@Body() updateMarketDto: UpdateMarketDto): Promise<Market>{
      return this.marketService.modifyMarketInfo(updateMarketDto);
    }

    // Get -> 서비스화면에서 최근 마켓 4개 보여주기
    @Get('/getNewFourMarkets')
    async getNewFourMarkets(): Promise<Market[]> {
      return this.marketService.getNewFourMarkets();
    }

   @Get('/getBestMarketList/:page')
    async getBestMarketList(@Param() page:string, @Query() type:string): Promise<Market[]> {
      return this.marketService.getBestMarketList(page, type);
    }
}
