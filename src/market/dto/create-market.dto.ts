export class CreateMarketDto{
    readonly _id: string;  // 고유 아이디
    readonly modelId: string; // 마켓이 가장 최근에 저장한 모델 고유 아이디
    readonly email: string;  // 이메일
    readonly name: string;  // 마켓 이름
    readonly phone: string;  // 핸드폰 번호
    readonly owner: string;  // 사업자 이름
    readonly url: string;  // 사이트 주소
    readonly businessNum: number;  // 사업자 등록번호
    readonly introduce: string;  // 마켓 소개
    readonly root: string;  // 입점 신청 경로
    readonly tags: string[];  // 해쉬태그 목록
    readonly agreeTerms: boolean;  // 이용약관 동의 여부
    readonly agreePrivateInfo: boolean;  // 개인정보 이용약관 동의 여부
    readonly agreeMarketingInfo: boolean;  // 마케팅 정보 활용 동의 여부
    readonly rejectReason: string;  // 입점 거부사유
    allowStatus: string;  // 입점 허가, 입점 거부, 입점 심사중

    readonly business: string;  // 사업자 등록증 사본
    readonly telemarket: string;  // 통신 판매업 신고증 사본
    readonly bankbook: string;  // 본인 명의 통장 사본

    readonly like: number;  // 좋아요 수

    readonly sales: number;  // 판매량

    readonly createdAt: Date;  // 입점 날짜
    readonly salesForMonth: number; // 한달간의 판매량
    readonly type: string; // 판매자 유형
 }