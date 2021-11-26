import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
	name: "comment",
	initialState: {

	},
	reducers: {
		// postComment: (state, action) => {
		// 	console.log(action);
		// 	console.log(state);
		// 	state.comment = action.payload.comment;
		// },
	},
});


export default commentSlice;
