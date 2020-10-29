export class CreateUserDto{
   readonly _id: string; // 고유 아이디
   readonly snsId: string; // 카톡 profile 아이디
   readonly email: string;  // 이메일
   readonly name: string;  // 이름
   readonly phone: string;  // 핸드폰 번호
   readonly agreeTerms: boolean;  // 이용약관 동의 여부
   readonly agreePrivateInfo: boolean;  // 개인정보 이용약관 동의 여부
   readonly agreeMarketingInfo: boolean;  // 마케팅 정보 활용 동의 여부
   readonly recentAdressIdList: string[];  // 최근 배송지 정보 리스트

   readonly likeProductIdList: string[];  // 좋아요 누른 상품 리스트
   readonly likeMarketIdList: string[];  // 좋아요 누른 마켓 리스트
   readonly couponIdList: string[];  // 보유하고 있는 쿠폰 리스트

   readonly totalPoint: number;  // 총 획득 포인트
   readonly remainPoint: number;  // 잔여 보유 포인트
   readonly usedPoint: number;  // 사용 포인트
   
   readonly fcmToken: string; // FCM 토큰
}