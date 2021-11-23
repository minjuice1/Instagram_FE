import { configureStore } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { history } from "./history";
import modalSlice from "./modal/modalSlice";
import bigModalSlice from "./modal/bigModalSlice";
import postSlice from "./post/postSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
	reducer: {
		router: connectRouter(history),
		bigModal: bigModalSlice,
		modal: modalSlice,
		post: postSlice.reducer,
		user: userSlice.reducer,
	},
});
