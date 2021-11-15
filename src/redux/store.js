import { configureStore } from "@reduxjs/toolkit";
import { connectRouter, } from "connected-react-router";
import {history} from "./history";



export const store = configureStore({
  reducer: {
    router: connectRouter(history),
  },
});