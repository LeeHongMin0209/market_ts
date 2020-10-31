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

    // Get -> 판매량 순으로 10개씩 마켓보여주기
    @Get('/getBestMarketList/:page')
    async getBestMarketList(@Param("page") page:string, @Query("type") type:string): Promise<Market[]> {
      return this.marketService.getBestMarketList(page, type);
    }

    //Get -> 마켓 상세조회
    @Get('/getMarket/:id')
    //@Param()안에 id 넣어줘야 작동, 다른 로직은 작동하지만 id를 이용하여 db를 찾는과정은 작동안함. 이유 찾아보기
    async getMarket(@Param("id") id: string): Promise<Market> {
      return this.marketService.getMarket(id);
    }
}
