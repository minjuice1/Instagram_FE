import {deleteProfileImg, getFollow, getFollower, getProfile, login, logout, profileImg} from "./user";
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
			// postSlice에 있음
		},
		[getFollower.fulfilled]: (state, action) => {
			// console.log("aaaaaa",action.payload)
			state.FollowerList = action.payload.data.user;
		},
		[getFollow.fulfilled]: (state, action) => {
			state.FollowList = action.payload.data.user;
		},
		[profileImg.fulfilled]: (state, action) => {
			//header까지 이미지 변경을 해주기 위해 부득이하게 window.location.reload사용함.
			window.location.reload();
		},
		[deleteProfileImg.fulfilled] : (state, action) => {
			//header까지 이미지 변경을 해주기 위해 부득이하게 window.location.reload사용함.
			window.location.reload();
		}
}
});

export const { profile_img_change } = userSlice.actions;

export default userSlice;
