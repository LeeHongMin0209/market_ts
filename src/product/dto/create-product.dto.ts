import { ProductDocument } from "../schemas/product.schema";

export class CreateProductDto {
    readonly _id: string;  // 고유 아이디
    readonly marketId: string; // 등록한 마켓 아이디
    readonly firstCategoryId: string;  // 상위 카테고리
    readonly secondCategoryId: string;  // 하위 카테고리
    readonly sizeIdList: string[];  // 여러 가능한 사이즈 목록
    readonly stockIdList: string[];  // 재고 -> 사이즈 / 컬러별 수량 리스트
    readonly coordinateProductIdList: string[] | ProductDocument[]; // 함께 코디할 상품 아이디 리스트
    readonly modelId: string;  // 모델 정보
    readonly qualityId: string;  // 재질 정보

    readonly name: string;  // 이름
    readonly marketName: string; // 마켓 이름
    readonly price: number;  // 가격
    readonly discountRate: number;  // 할인율
    readonly discountStartDate: Date | undefined; // 할인 시작 날짜
    readonly discountEndDate: Date | undefined;  //  할인 종료 날짜
    readonly tags: string[];  // 관련 태그들
    readonly fabric: string;  // 소재
    readonly modelFitting: string;  // 모델 피팅
    readonly laundry: string;  // 세탁 방법
    readonly description: string[];  // 상품 설명
    readonly createdAt: Date;  // 상품 등록날짜

    readonly mainImages: string[];  // 대표 이미지
    readonly subImages: string[];  // 서브 이미지
    readonly bannerImage: string;  // 배너 이미지
    readonly soldOut: boolean; // 품절 여부
    
    readonly rejectReason: string;  // 판매 거절 사유
    readonly allowStatus: string;  // 판매 허가, 판매 거절, 판매 심사중
  
    readonly like: number;  // 좋아요 수
    readonly review: number;  // 리뷰 수

    readonly sales: number;  // 판매량
    readonly lookBook: boolean; //룩북 등록 여부
    readonly lookBookCreatedAt: Date | null; //룩북 등록날짜
    readonly lookBookMainImages: string[];  // 룩북 대표 이미지
    readonly lookBookSubImages: string[];  // 룩북 서브 이미지
    readonly lookBookCoordinateIdList: string[] | ProductDocument[]; // 룩북 코디 상품 리스트
    readonly salesForMonth: number // 한달간의 판매량
} 