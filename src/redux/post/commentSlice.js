import { createSlice } from "@reduxjs/toolkit";
import { deleteComment } from './comment';

const commentSlice = createSlice({
	name: "comment",
	initialState: {
		comment: [],
	},
	reducers: {

  },
	extraReducers: {
		[deleteComment.fulfilled]: (state, action) => {
			const comment_list = state.comment.filter(
				comment=> comment._id !== action.payload );
			state.posts = comment_list;
		 },
	},
});

export const {delete_comment} = commentSlice.actions;

export default commentSlice;
