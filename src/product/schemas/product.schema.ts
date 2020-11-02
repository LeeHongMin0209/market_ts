import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    _id: string;  // 고유 아이디

    @Prop({ type : [SchemaTypes.ObjectId], ref: 'Market' })
    marketId: string; // 등록한 마켓 아이디
    
    @Prop({ type : [SchemaTypes.ObjectId], ref: 'FirstCategory' })
    firstCategoryId: string;  // 상위 카테고리
    
    @Prop({ type : [SchemaTypes.ObjectId], ref: 'SecondCategory' })
    secondCategoryId: string;  // 하위 카테고리
    
    @Prop({ type : [SchemaTypes.ObjectId], ref: 'Size' })
    sizeIdList: string[];  // 여러 가능한 사이즈 목록
    
    @Prop({ type : [SchemaTypes.ObjectId], ref: 'Stock' })
    stockIdList: string[];  // 재고 -> 사이즈 / 컬러별 수량 리스트
    
    @Prop({ type : [SchemaTypes.ObjectId], ref: 'Product' })
    coordinateProductIdList: string[] | ProductDocument[]; // 함께 코디할 상품 아이디 리스트
    
    @Prop({ type : [SchemaTypes.ObjectId], ref: 'Model' })
    modelId: string;  // 모델 정보
    
    @Prop({ type : [SchemaTypes.ObjectId], ref: 'Quality' })
    qualityId: string;  // 재질 정보

    @Prop()
    name: string;  // 이름
    
    @Prop()
    marketName: string; // 마켓 이름
    
    @Prop()
    price: number;  // 가격
    
    @Prop()
    discountRate: number;  // 할인율
    
    @Prop()
    discountStartDate: Date | undefined; // 할인 시작 날짜
    
    @Prop()
    discountEndDate: Date | undefined;  //  할인 종료 날짜
    
    @Prop()
    tags: string[];  // 관련 태그들
    
    @Prop()
    fabric: string;  // 소재
    
    @Prop()
    modelFitting: string;  // 모델 피팅
    
    @Prop()
    laundry: string;  // 세탁 방법
    
    @Prop()
    description: string[];  // 상품 설명
    
    @Prop()
    createdAt: Date;  // 상품 등록날짜

    @Prop()
    mainImages: string[];  // 대표 이미지
    
    @Prop()
    subImages: string[];  // 서브 이미지
    
    @Prop()
    bannerImage: string;  // 배너 이미지
    
    @Prop()
    soldOut: boolean; // 품절 여부
    
    @Prop()
    rejectReason: string;  // 판매 거절 사유
    
    @Prop({ enum: ['판매 허가', '판매 거절', '판매 심사중'] })
    allowStatus: string;  // 판매 허가, 판매 거절, 판매 심사중
    
    @Prop({ default: 0 })
    like: number;  // 좋아요 수
    
    @Prop({ default: 0 })
    review: number;  // 리뷰 수

    @Prop({ default: 0 })
    sales: number;  // 판매량
    
    @Prop()
    lookBook: boolean; //룩북 등록 여부
    
    @Prop()
    lookBookCreatedAt: Date | null; //룩북 등록날짜
    
    @Prop()
    lookBookMainImages: string[];  // 룩북 대표 이미지
    
    @Prop()
    lookBookSubImages: string[];  // 룩북 서브 이미지
    
    @Prop({ type : [SchemaTypes.ObjectId], ref: 'Product' })
    lookBookCoordinateIdList: string[] | ProductDocument[]; // 룩북 코디 상품 리스트
    
    @Prop({ default: 0 })
    salesForMonth: number // 한달간의 판매량
}

export const ProductSchema = SchemaFactory.createForClass(Product);