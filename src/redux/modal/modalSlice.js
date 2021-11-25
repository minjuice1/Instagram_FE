import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const modal_check = createAsyncThunk(
	"modal/modal_check",
	async (data, thunkAPI) => {},
);

const modalSlice = createSlice({

  name: 'modal',
  initialState : {
    is_modal : false,
  },
  reducers: {
    },
  extraReducers: {
    [modal_check.fulfilled]: (state, action) => {
      state.is_modal = !state.is_modal;
    }
  },
});

export default modalSlice.reducer;
