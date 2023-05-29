import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wish: [],
  aiResult: [],
  survey: {},
};

const dogSlice = createSlice({
  name: "dog",
  initialState,
  reducers: {
    setWish: (state, action) => {
      state.wish = action.payload;
    },
    setAiResult: (state, action) => {
      state.aiResult = action.payload;
    },
    setSurvey: (state, action) => {
      state.survey = action.payload;
    },
  },
});

export const { setWish, setAiResult, setSurvey } = dogSlice.actions;

export default dogSlice;
