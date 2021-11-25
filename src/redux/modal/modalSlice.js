import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const modal_check = createAsyncThunk(
	"modal/modal_check",
	async (data, thunkAPI) => {},
	"bigmodal/bigModal_check",
	async (data, thunkAPI) => {},
);

const modalSlice = createSlice({
	name: "modal",
	initialState: {
		is_modal: false,
	},
	reducers: {},
	extraReducers: {
		[modal_check.fulfilled]: (state, action) => {
			state.is_modal = !state.is_modal;
		},
		[modal_check.fulfilled]: (state, action) => {
			state.is_bigModal = !state.is_bigModal;
		},
	},
});

export default modalSlice.reducer;
