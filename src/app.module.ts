import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import{ MarketModule } from './market/market.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, MarketModule, ProductModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}


