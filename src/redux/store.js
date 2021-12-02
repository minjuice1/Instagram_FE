import { configureStore } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { history } from "../history";
import modalSlice from "./modal/modalSlice";
import postSlice from "./post/postSlice";
import userSlice from "./user/userSlice";
import commentSlice from './post/commentSlice';

export const store = configureStore({
	reducer: {
		router: connectRouter(history),
		modal: modalSlice,
		post: postSlice.reducer,
		user: userSlice.reducer,
		comment: commentSlice.reducer,
	},
	//A non-serializable value was detected in an action, in the path 오류 없애기
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),

});



