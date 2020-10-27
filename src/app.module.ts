import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:1234@localhost:27017/nodebird?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false'),
    CatModule,
  ],
})
export class AppModule {}


