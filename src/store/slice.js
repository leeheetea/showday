import { createSlice } from "@reduxjs/toolkit";
import musicalData from "../musicalData.json";
import concertData from "../concertData.json";
import theatreData from "../theatreData.json";
import totalData from "../totalData.json";
import { combineReducers } from "@reduxjs/toolkit";

const initialMusicalState = musicalData;

const musicalsSlice = createSlice({
  name: "musicals",
  initialState: initialMusicalState,
  reducers: {
    setMusicals: (state, action) => {
      return action.payload;
    },
    // 액션 정의
  },
});

const initialConcetState = concertData;

const concertSlice = createSlice({
  name: "concerts",
  initialState: initialConcetState,
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

const initialBooksState = totalData;

const booksSlice = createSlice({
  name: "booksData",
  initialState: initialBooksState,
  reducers: {
    getBooksInfo: (state, action) => {
      const findData = initialBooksState.filter(data => (data.id === state.id));
      console.log('(booksSlice) findData : ', state, findData);
      return findData;
    },
    // 액션 정의
  },
});

// const initialBookInfoState = {
//   bookId: 0,
//   id: 0,
//   title: '',
//   url: '',
//   price: 0,
//   ticketCnt: 0,
//   seats: [],
// };

// const bookInfoSlice = createSlice({
//   name: 'bookInfo',
//   initialState: initialBookInfoState,
//   reducers: {
//     setBookInfo: (state, action) => {
//       return action.payload;
//     }
//   },
// });

const musicalsReducer = musicalsSlice.reducer;
const concertsReducer = concertSlice.reducer;
const theatresReducer = theatreSlice.reducer;
const booksReducer = booksSlice.reducer;

const rootReducer = combineReducers({
  musicals: musicalsReducer,
  concerts: concertsReducer,
  theatres: theatresReducer,
  booksData: booksReducer,
});

export const { setMusicals } = musicalsSlice.actions;
export const { setConcerts } = concertSlice.actions;
export const { setTheatres } = theatreSlice.actions;
export const { getBooksInfo } = booksSlice.actions;

export default rootReducer;
