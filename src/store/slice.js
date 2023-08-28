import { createSlice } from "@reduxjs/toolkit";
import musicalData from "../musicalData.json";
import concertData from "../concertData.json";
import theatreData from "../theatreData.json";
import faqSlice from "./faqSlice";
import totalData from "../totalData.json";
import { combineReducers } from "@reduxjs/toolkit";
import postsSlice from "./postSlice";
import moment from "moment";
import util from "../utils";

const DISCOUNT_RATE = 15;

const initialMusicalState = musicalData;

const musicalsSlice = createSlice({
  name: "musicals",
  initialState: initialMusicalState,
  reducers: {
    setMusicals: (state, action) => {
      return action.payload;
    },
    getMusicalInfoById: (state, action) => {
      console.log("(musicalsSlice) action : ", action.payload.id);
      const findData = initialMusicalState.filter(
        (data) => data.id === action.payload.id
      );
      console.log("(musicalsSlice) findData : ", findData);
      return findData;
    },
    // 액션 정의
  },
});

const initialConcertState = concertData;

const concertSlice = createSlice({
  name: "concerts",
  initialState: initialConcertState,
  reducers: {
    setConcerts: (state, action) => {
      return action.payload;
    },
    // 액션 정의
  },
});

const initialTheatreData = theatreData;

const theatreSlice = createSlice({
  name: "theatres",
  initialState: initialTheatreData,
  reducers: {
    setTheatres: (state, action) => {
      return action.payload;
    },
    // 액션 정의
  },
});

const initialBooksState = {
  bookId: 1, // 예약번호
  userInfo: {
    userId: "1",
    name: "홍박사",
    phone: "01022223333",
    email: "abctest@test.com",
  },
  showInfo: [
    // 예약 선택 공연 정보
    {
      id: "1001",
      ranking: 1,
      title: "노엘 갤러거 하이 플라잉 버즈",
      bannerUrl: "",
      url: "https://ticketimage.interpark.com/Play/image/large/23/23010643_p.gif",
      place: "잠실 실내체육관",
      period: "2023.11.27 ~2023.11.28",
      price: "143,000원",
      detail:
        "https://ticketimage.interpark.com/Play/image/etc/23/23010643-05.jpg",
      showType: "concert",
      showTime: [11, 13],
    },
  ],
  bookDate: "2023.04.01", // 예약 선택 날짜
  bookCompleteTime: "12:30", // 예약 선택 시간
  bookShowTime: "12:30", // 예약 선택 시간
  bookStep: 2,
  youtDiscount: -15,
  totalPrice: {
    sumPrice: 0,
    sumYoutPrice: 0,
    sumDiscount: 0,
    resultTotalPrice: 0,
  },
  seats: {
    leftSeats: [198, 200, 199],
    bookSeats: ["1_R1_A", "1_R2_C"], // A는 일반, C는 청소년 할인 자리 구분
  }, // R석 자리만 있고, 200개 좌석으로 일단 한정(R1 ~ R200)
};

const booksSlice = createSlice({
  name: "booksData",
  initialState: initialBooksState,
  reducers: {
    /*     getShowInfoById: (state, action) => {
      console.log("(booksSlice-getShowInfoById) payload : ", action.payload.id);
      const findData = initialBooksState.totalData.filter(
        (data) => data.id === action.payload.id
      );
      console.log("(booksSlice) findData : ", state, findData);
      //console.log("(booksSlice) state.showInfo(before) : ", state.showInfo);
      state.showInfo = findData;
      //console.log("(booksSlice) state.showInfo(after) : ", state.showInfo);
    }, */
    setShowInfo: (state, action) => {
      console.log("(booksSlice-setShowInfo) payload : ", action.payload);
      state.showInfo[0] = action.payload.props.data;
      //state.bookDate = util.dateFormat(action.payload.selectedValue);
      state.bookDate = moment(action.payload.selectedValueMs).format(
        "YYYY.MM.DD"
      );
      state.bookShowTime = util.getItemFromString(
        action.payload.choosedShowTime
      );
    },

    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
      // state.totalPrice.sumPrice = action.payload.sumPrice;
      // state.totalPrice.sumYoutPrice = action.payload.sumYoutPrice;
      // state.totalPrice.sumDiscount = action.payload.sumDiscount;
      // state.totalPrice.resultTotalPrice = action.payload.resultTotalPrice;
    },
  },
});

const userInfoState = {
  userId: "1",
  name: "홍박사",
  phoneNumber: "01022223333",
  email: "abctest@test.com",
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: userInfoState,
  reducers: {
    getUserInfo: (state, action) => {
      console.log("(userInfoSlice_getUserInfo) payload : ", action.payload);
      const findData = userInfoState.filter(
        (data) => data.userId === action.payload.userId
      );
      state.showInfo = findData;
    },
    setUserInfo: (state, action) => {
      console.log("(userInfoSlice_setUserInfo) payload : ", action.payload);
    },
  },
});

const musicalsReducer = musicalsSlice.reducer;
const concertsReducer = concertSlice.reducer;
const theatresReducer = theatreSlice.reducer;
const booksReducer = booksSlice.reducer;
const userInfoReducer = userInfoSlice.reducer;

const rootReducer = combineReducers({
  musicals: musicalsReducer,
  concerts: concertsReducer,
  theatres: theatresReducer,
  booksData: booksReducer,
  posts: postsSlice,
  userInfo: userInfoReducer,
  faq: faqSlice,
});

export const { setMusicals, getMusicalInfoById } = musicalsSlice.actions;
export const { setConcerts } = concertSlice.actions;
export const { setTheatres } = theatreSlice.actions;
export const { setShowInfo, setTotalPrice } = booksSlice.actions;
export const { getUserInfo, setUserInfo } = userInfoSlice.actions;

export default rootReducer;
