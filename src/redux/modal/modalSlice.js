import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const modal_check = createAsyncThunk(
	"modal/modal_check",
	async (data, thunkAPI) => {},
);

export const following_modal_check = createAsyncThunk(
	"modal/following_modal_check",
	async (data, thunkAPI) => {},
);

export const followers_modal_check = createAsyncThunk(
	"modal/followers_modal_check",
	async (data, thunkAPI) => {},
);

export const add_modal = createAsyncThunk(
	"modal/add_modal",
	async (data, thunkAPI) => {},
);

const modalSlice = createSlice({
	name: "modal",
	initialState: {
		is_modal: false,
		following_modal: false,
		followers_modal: false,
		add_modal: false,
	},
	reducers: {},
	extraReducers: {
		[modal_check.fulfilled]: (state, action) => {
			state.is_modal = !state.is_modal;
		},
		[following_modal_check.fulfilled]: (state, action) => {
			state.following_modal = !state.following_modal;
		},
		[followers_modal_check.fulfilled]: (state, action) => {
			state.followers_modal = !state.followers_modal;
		},
		[add_modal.fulfilled]: (state) => {
			state.add_modal = !state.add_modal;
		},
	},
});

export default modalSlice.reducer;
