import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dogSlice from "./dog";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  dog: dogSlice.reducer,
});

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["dog"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
// export default persistReducer(persistConfig, rootReducer);
