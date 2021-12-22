import {deleteOneFollower, deleteProfileImg, getFollow,
	getFollower, getProfile, login, logout, profileImg} from "./user";
import { createSlice } from "@reduxjs/toolkit";
import {getUserPost} from "../post/post";

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: [],
		isLogin: false,
		FollowerList: [],
		FollowList: [],
		hashtagFollow: [],
	},
	reducers: {
		profile_img_change : (state, action) => {
			state.user = action.payload;
		}

	},
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			state.isLogin = true;
		},
		[logout.fulfilled]: (state, action) => {
			state.isLogin = false;
			window.location.reload();
		},
		[getProfile.fulfilled]: (state,action) => {
			state.user = action.payload.data.user;
	},
		[getFollower.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.FollowerList = action.payload.data.user;
		},
		[deleteOneFollower.fulfilled]: (state, {payload}) => {

		},

		[getFollow.fulfilled]: (state, action) => {
			state.FollowList = action.payload.data.user;
			state.hashtagFollow = action.payload.data.hashtagFollow;
		},
		[profileImg.fulfilled]: (state, action) => {
			window.location.reload();
		},
		[deleteProfileImg.fulfilled] : (state, action) => {
			window.location.reload();
		},

}
});

export const { profile_img_change } = userSlice.actions;

export default userSlice;
