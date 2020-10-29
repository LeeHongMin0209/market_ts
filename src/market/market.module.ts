import { Module } from '@nestjs/common';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';
import { DatabaseModule } from '../database/database.module';
import { marketProviders } from './market.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MarketController],
  providers: [
    MarketService,
    ...marketProviders,
  ],
})
export class MarketModule {}
