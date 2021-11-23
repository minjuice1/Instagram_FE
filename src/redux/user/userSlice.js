import { login } from "./user";
import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

const userSlice = createSlice({
	name: "user",
	initialState: {
		isLogin: false,
	},
	reducers: {
		loginCheck: (state, payload ) => {
			state.isLogin = !state.isLogin;
		},
	},
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			state.isLogin = true;
		},


	},
});

export const {loginCheck} = userSlice.actions;

export default userSlice;
