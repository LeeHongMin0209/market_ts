import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MarketService } from './market.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { Market } from './schemas/market.schema';

@Controller('market')

export class MarketController {
    constructor(private readonly marketService: MarketService) {}

    @Post()
    async create(@Body() createMarketDto: CreateMarketDto){
        await this.marketService.createMarket(createMarketDto);
    }

    @Get('/:id')
    async findOne(@Param("id") userId: string): Promise<Market> {
        return this.marketService.getOne(userId);
    }
}
