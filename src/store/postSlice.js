import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "[단독판매] [MD]2023 XIA Fanmeeting Tour in SEOUL",
    author: "관리자",
    content: `판매일정
    * 온라인 판매 일정 : 2023/08/29(화) 14:00 PM ~ 2023/09/10(일) 23:59PM
    * 상품 판매 기간은 운영 상황에 따라 변동될 수 있으며, 판매가 종료된 이후에는 수량 변경이 불가합니다.​`,
    date: "2023-08-24",
  },
  {
    id: 2,
    title: "[단독판매] 2023 명작 가족라이브 뮤지컬 <호두까기인형> ",
    author: "관리자",
    content: `공연정보

    공연 기간 : 2023년 11월 04일(토)
    공연 시간 : 13시, 15시, 17시​ 
    공연 장소 : 평송청소년문화센터 소극장
    티켓 가격 : 전석 35,000원
    관람 시간 : 55분
    관람 등급 : 24개월이상`,
    date: "2023-08-23",
  },
  {
    id: 3,
    title: "[단독판매] 붕괴3rd 가을 팝업스토어 : SEELE 티켓오픈 안내",
    author: "관리자",
    content: `
    붕괴3rd 가을 팝업스토어 : SEELE 티켓오픈 안내입니다.
    
    
    행사정보
    
    행사 기간 : 2023년 09월 08일(금) ~ 2023년 09월 14일(목)
    행사 시간 : 10시30분~
    행사 장소 : 현대백화점 천호점 B1 대행사장
    티켓 가격 : 500원
    관람 시간 : 30분
    관람 등급 : 전체관람가
    
    공지사항
    
    * 예매마감 : 행사당일 마지막 입장시간 30분전까지    
    * 취소마감 : 행사전일 17시까지    
    * 구매매수 : 회차당 1인 1일 1매​ ​ 
    
    기획사정보
    
    주최 : 호요버스     
    주관 : 호요버스 ​ `,
    date: "2023-08-22",
  },
  {
    id: 4,
    title: "[단독판매] 2023 SKY FESTIVAL 클래식&뮤지컬 콘서트 티켓오픈 안내",
    author: "관리자",
    content: `2023 SKY FESTIVAL 클래식&뮤지컬 콘서​ 티켓오픈 안내입니다. 
 

    공연정보
    공연 기간 : 2023년 09월 17일 (일)
    공연 시간 : 17시30분 
    공연 장소 : 인천공항 잔디광장
    티켓 가격 : 무료
    관람 연령 : 만 7세 이상​
    
    
    공지사항
    - 1인 2매 예약 가능
    - 좌석티켓 현장수령만 가능
    
    
    공연내용
    SKY FESTIVAL 
    
    2023 인천공항 스카이페스티벌 K-POP콘서트
    9/16(토) 19시30분 
       - 하이키(HI-KYE), 보이넥스트도어(BOYNEXTDOOR), 스테이씨(STAYC), 
         유노윤호(U-KNOW), 자우림(JAURIM) 
      
    인천공항 스카이페스티벌 클래식&뮤지컬 콘서트
    9/17(일) 17시30분 
    - 어반팝스오케스트라, 바다, 민우혁, 성악가 이동신
    
    9/16(토)~17(일) 12:00
    다양한 부대프로그램 및 푸드페스타​
    
    
    기획사정보
    
    주최 : 인천국제공항공사​​ `,
    date: "2023-08-25",
  },
  {
    id: 5,
    title: "[단독판매] 제 88기 KBS 부산 노래 교실​​​ 티켓오픈 안내",
    author: "관리자",
    content: `제 88기 KBS 부산 노래 교실​ 티켓오픈 안내입니다.

    공연정보
    
    공연 기간 : 2023년 10월 04일(수) ~ 2023년 12월 20일(수) 3개월
    
    공연 시간 : 매주 수요일 오전 10시30분, 오후2시30분
    
    공연 장소 : KBS 부산홀
    
    티켓 가격 : 지정석(1층) 40,000원/ 자유석(2,3층) 30,000원
    
    관람 등급 : 만 7세 이상
    
     
    
     
    
    <알립니다>
    
    ※ 예매매수 : 1인 4매까지 (1층 지정석 예매에 한함 / 자유석은 매수제한 없음)
    
    ※ 노래교실 책자 개강일 현장수령
    
    ※ 개강일 : 2023. 10. 04(수)  ​ 
    
     
    
     
    
    기획사정보
    
    제작 : KBS
    
    주최 : KBS  
    
     ​ `,
    date: "2023-08-25",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
