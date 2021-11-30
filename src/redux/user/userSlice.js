import {getProfile, login, logout} from "./user";
import { createSlice } from "@reduxjs/toolkit";
import {history} from "../../history";


const userSlice = createSlice({
	name: "user",
	initialState: {
		user: [],
		isLogin: false,
	},
	reducers: {

	},
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			state.isLogin = true;
		},
		[logout.fulfilled]: (state, action) => {
			state.isLogin = false;
		},
		[getProfile.fulfilled]: (state,action) => {
			state.user = action.payload.data.user;
		}


	},
});

export const {loginCheck} = userSlice.actions;

export default userSlice;
