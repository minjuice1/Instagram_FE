import { configureStore } from "@reduxjs/toolkit";
import { connectRouter, } from "connected-react-router";
import {history} from "./history";
import modalSlice from "./modal/modalSlice";



export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    modal : modalSlice
  },
});