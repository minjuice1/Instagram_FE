import { login } from "./user";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		isLogin: false,
	},
	reducers: {
		loginCheck: (state, { payload: isLogin }) => {
			state.isLogin = true;
		},
	},
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			state.isLogin = true;
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice;
