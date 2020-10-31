import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document, SchemaType, SchemaTypes } from 'mongoose';
import { ObjectId } from 'mongodb';
export type MarketDocument = Market & Document;

@Schema()
export class Market extends Document {

     @Prop()
     modelId: string; // 마켓이 가장 최근에 저장한 모델 고유 아이디
     
     @Prop()
     email: string;  // 이메일
     
     @Prop()
     name: string;  // 마켓 이름
     
     @Prop()
     phone: string;  // 핸드폰 번호
     
     @Prop()
     owner: string;  // 사업자 이름
     
     @Prop()
     url: string;  // 사이트 주소
     
     @Prop()
     businessNum: number;  // 사업자 등록번호
     
     @Prop()
     introduce: string;  // 마켓 소개
     
     @Prop()
     root: string;  // 입점 신청 경로
     
     @Prop([String])
     tags: string[];  // 해쉬태그 목록
     
     @Prop()
     agreeTerms: boolean;  // 이용약관 동의 여부
     
     @Prop()
     agreePrivateInfo: boolean;  // 개인정보 이용약관 동의 여부
     
     @Prop()
     agreeMarketingInfo: boolean;  // 마케팅 정보 활용 동의 여부
     
     @Prop()
     rejectReason: string;  // 입점 거부사유
     
     @Prop({enum : ['입점허가', '입점 거부', '입점 심사중']})
     allowStatus: string;  // 입점 허가, 입점 거부  
     
     @Prop()
     business: string;  // 사업자 등록증 사본
     
     @Prop()
     telemarket: string;  // 통신 판매업 신고증 사본
     
     @Prop()
     bankbook: string;  // 본인     
     
     @Prop()
     like: number;      
     
     @Prop()
     sales: number; 
     
     @Prop()
     createdAt: Date;  // 입점 날짜
     
     @Prop()
     salesForMonth: number // 한달간의 판매량

     @Prop({enum: ['INFLUENCER', 'GROOMING']})
     type: string // 판매자 유형
}
export const MarketSchema = SchemaFactory.createForClass(Market);