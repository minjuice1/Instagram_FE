// import { createSlice } from "@reduxjs/toolkit";
// // import { addComment, deleteComment, likedComment } from './comment';

// const commentSlice = createSlice({
// 	name: "comment",
// 	initialState: {
// 		comments: [],
// 		replyTag: "",
// 	},
// 	reducers: {
// 		replyReducer : (state, action) => {
// 			state.replyTag = action.payload;
// 			// console.log("replyTag 호출됨");
// 		},
// 		getComment : (state, action) => {
// 			state.comments = action.payload;
// 			// console.log(action.payload);
// 		}
//   },
// 	extraReducers: {
// 		// [addComment.fulfilled] : (state, action) => {
// 		// 	state.comments = action.payload.comment;
// 		// 	// console.log(action.payload);
//     // },
// 		// [deleteComment.fulfilled]: (state, action) => {
// 		// 	// console.log(action.payload);
// 		// 	const comment_list = state.comments.filter(
// 		// 		(cnt) => cnt._id !== action.payload );
// 		// 	state.comments = comment_list;			
// 		//  },
// 		//  [likedComment.fulfilled]: (state, action) => {
// 			//  console.log(action);
// 			// const idx = state.comments.findIndex((cnt) => cnt._id === action.payload);
//       // state.comments[idx].like = !state.comments[idx].like;
// 		 },
// 	},
// });

// export const commentActions = commentSlice.actions;
// export default commentSlice;
