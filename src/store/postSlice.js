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
    content: `안녕하세요. 티켓링크입니다.

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
