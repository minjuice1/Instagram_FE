import {getFollower, getProfile, login, logout} from "./user";
import { createSlice } from "@reduxjs/toolkit";
import {history} from "../../history";
import {getUserPost} from "../post/post";

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: [],
		isLogin: false,
		FollowerList: [],
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
	},
		[getUserPost.fulfilled]: (state,action) => {
			console.log(action.payload);
		},
		[getFollower.fulfilled]: (state, action) => {
			state.FollowerList = action.payload.data.user;
		}
}
});

export const { loginCheck } = userSlice.actions;

export default userSlice;
