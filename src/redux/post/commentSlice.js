import { createSlice } from "@reduxjs/toolkit";
import { deleteComment, likedComment } from './comment';

const commentSlice = createSlice({
	name: "comment",
	initialState: {
		comments: [],
		replyTag: "",
		liked: [],
	},
	reducers: {
		replyReducer : (state, action) => {
			state.replyTag = action.payload;
			console.log("replyTag 호출됨");
		}
  },
	extraReducers: {
		[deleteComment.fulfilled]: (state, {payload}) => {
			const comment_list = state.comments.filter(
				(cnt) => cnt._id !== payload );
			state.comments = comment_list;
		 },
		 [likedComment.fulfilled]: (state, action) => {
			 state.liked = action. payload;
			 console.log(action);
		 }
	// 	[deleteComment.fulfilled]: (state, {payload}) => {
	// 		console.log(payload);
	// 		const comment_list = state.comments.filter((cnt) => {
	// 			if(cnt._id !== payload)
	// 			{return cnt
	// 			}
	// 		})
	// 		state.comments = comment_list;
	// },
	},
});

export const {delete_comment, replyReducer, liked_Comment} = commentSlice.actions;

export default commentSlice;
