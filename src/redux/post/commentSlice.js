import { createSlice } from "@reduxjs/toolkit";
import { addComment, deleteComment, likedComment } from './comment';

const commentSlice = createSlice({
	name: "comment",
	initialState: {
		comments: [],
		replyTag: "",
	},
	reducers: {
		replyReducer : (state, action) => {
			state.replyTag = action.payload;
			console.log("replyTag 호출됨");
		},
  },
	extraReducers: {
		[addComment.fulfilled] : (state, action) => {
			state.comments = action.payload;
			console.log(state.comments);
    },
		[deleteComment.fulfilled]: (state, {payload}) => {
			const comment_list = state.comments.filter(
				(cnt) => cnt._id !== payload );
			state.comments = comment_list;
		 },
		 [likedComment.fulfilled]: (state, action) => {
			const idx = state.comments.findIndex(
				(cnt) => cnt._id == action.payload)
				console.log(state.comments);
		 },
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

export const commentActions = commentSlice.actions;

export default commentSlice;
