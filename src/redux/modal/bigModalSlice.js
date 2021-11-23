import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const bigModal_check = createAsyncThunk(
	"bigmodal/bigModal_check",
	async (data, thunkAPI) => {},
);

const bigModalSlice = createSlice({
	name: "bigModal",
	initialState: {
		is_bigModal: false,
	},
	reducers: {},
	extraReducers: {
		[bigModal_check.fulfilled]: (state, action) => {
			state.is_bigModal = !state.is_bigModal;
		},
	},
});

export default bigModalSlice.reducer;
