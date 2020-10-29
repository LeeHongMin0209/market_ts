import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {    
    @Prop()
    snsId: string;
    
    @Prop()
    email: string;

    @Prop()
    name: string;

    @Prop()
    phone: string;

    @Prop()
    agreeTerms: boolean;  // 이용약관 동의 여부
    
    @Prop()
    agreePrivateInfo: boolean;  // 개인정보 이용약관 동의 여부
    
    @Prop()
    agreeMarketingInfo: boolean;  // 마케팅 정보 활용 동의 여부
    
    @Prop([String])
    recentAdressIdList: string[];  // 최근 배송지 정보 리스트

    @Prop([String])
    likeProductIdList: string[];  // 좋아요 누른 상품 리스트
    
    @Prop([String])
    likeMarketIdList: string[];  // 좋아요 누른 마켓 리스트
    
    @Prop([String])
    couponIdList: string[];  // 보유하고 있는 쿠폰 리스트

    @Prop()
    totalPoint: number;  // 총 획득 포인트
    
    @Prop()
    remainPoint: number;  // 잔여 보유 포인트
   
    @Prop()
    usedPoint: number;  // 사용 포인트

    @Prop()
    fcmToken: string; // FCM 토큰
}
export const UserSchema = SchemaFactory.createForClass(User);