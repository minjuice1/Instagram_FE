import {deleteProfileImg, editProfile, getFollow, getFollower, getProfile, login, logout, profileImg} from "./user";
import { createSlice } from "@reduxjs/toolkit";
import {history} from "../../history";
import {getUserPost} from "../post/post";

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: [],
		isLogin: false,
		FollowerList: [],
		FollowList: [],
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
		[getUserPost.fulfilled]: (state,action) => {

		},
		[getFollower.fulfilled]: (state, action) => {
			state.FollowerList = action.payload.data.user;
		},
		[getFollow.fulfilled]: (state, action) => {
			state.FollowList = action.payload.data.user;
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
