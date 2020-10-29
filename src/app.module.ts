import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import{ MarketModule } from './market/market.module';

@Module({
  imports: [UserModule,CatModule, MarketModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}


