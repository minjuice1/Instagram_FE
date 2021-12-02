import { createSlice } from "@reduxjs/toolkit";
import { deleteComment } from './comment';

const commentSlice = createSlice({
	name: "comment",
	initialState: {
		comment: [],
		reply: "",
	},
	reducers: {
		replyReducer : (state, action) => {
			state.reply = action.payload;
			console.log("호출됨");
		}
  },
	extraReducers: {
		[deleteComment.fulfilled]: (state, {payload}) => {
			console.log(payload);
			const comment_list = state.comment.filter(
				comment=> comment._id !== payload );
			state.comment = comment_list;
			console.log(state.comment);
		 },
		 
	},
});

export const {delete_comment, replyReducer} = commentSlice.actions;

export default commentSlice;
