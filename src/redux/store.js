import { configureStore } from "@reduxjs/toolkit";
import { connectRouter, } from "connected-react-router";
import {history} from "./history";
import modalSlice from "./modal/modalSlice";
import postSlice from "./post/postSlice";


export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    modal : modalSlice,
    post: postSlice.reducer,

  },
});