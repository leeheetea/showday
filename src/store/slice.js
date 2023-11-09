import { createSlice } from "@reduxjs/toolkit";
import musicalData from "../musicalData.json";
import concertData from "../concertData.json";
import theatreData from "../theatreData.json";
import bookData from "../bookData.json";
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

const initialBooksState = bookData;

const booksSlice = createSlice({
  name: "booksData",
  initialState: initialBooksState,
  reducers: {
    setShowInfo: (state, action) => {
      //console.log(">>> setShowInfo store ", state, action.payload);
      state.showInfo = action.payload;
    },
    setBookInfo: (state, action) => {
      console.log(" action.payload : ", action.payload);
      state.bookingData.bookDate = action.payload.tempChoosedShowDate;
      state.bookingData.bookShowTime = action.payload.choosedShowTime;
      state.bookingData.choosedShowTimeId = action.payload.choosedShowTimeId;
    },
    setTotalPrice: (state, action) => {
      state.bookingData.totalPrice = action.payload;
    },

    setBookStep: (state, action) => {
      //console.log("[booksSlice]", action.payload.bookStep);
      state.bookingData.bookStep = action.payload.bookStep;
    },

    setBookDateTime: (state, action) => {
      state.bookingData.bookDate = moment(action.payload.selectedValue).format(
        "YYYY-MM-DD"
      );
      state.bookingData.bookShowTime = action.payload.choosedShowTime;
      state.bookingData.bookShowTimeOrder = action.payload.bookShowTimeOrder;
    },

    setMyBookSeats: (state, action) => {
      state.bookingData.myBookSeats = action.payload.myBookSeats;
      //console.log(">>>2_after" + state.seats.myBookSeats);
    },

    setConfirms: (state, action) => {
      state.bookingData.bookDate.confirms = action.payload;
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
      state.bookStep = action.payload;
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
export const {
  setShowInfo,
  setBookInfo,
  setTotalPrice,
  setBookStep,
  setBookDateTime,
  setMyBookSeats,
  setConfirms,
} = booksSlice.actions;
export const { getUserInfo, setUserInfo } = userInfoSlice.actions;

export default rootReducer;
