import { login } from "./user";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		isLogin: "",
	},
	reducers: {
		loginCheck: (state, payload) => {
			state.isLogin = !state.isLogin;
		},
	},
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			state.isLogin = true;
		},
	},
});

export const { loginCheck } = userSlice.actions;

export default userSlice;
