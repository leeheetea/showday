import { createSlice } from "@reduxjs/toolkit";
import musicalData from "../musicalData.json";
import concertData from "../concertData.json";
import theatreData from "../theatreData.json";
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

const musicalsReducer = musicalsSlice.reducer;
const concertsReducer = concertSlice.reducer;
const theatresReducer = theatreSlice.reducer;

const rootReducer = combineReducers({
  musicals: musicalsReducer,
  concerts: concertsReducer,
  theatres: theatresReducer,
});

export const { setMusicals } = musicalsSlice.actions;
export const { setConcerts } = concertSlice.actions;
export const { setTheatres } = theatreSlice.actions;

export default rootReducer;
