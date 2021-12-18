import {createSlice} from "@reduxjs/toolkit";
import postSlice from "../post/postSlice";
import {get_headerSearch, headerSearch} from "./search";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    user:[],
    result:[],
  },
  reducers: {

  },

  extraReducers: {
    [headerSearch.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.result = action.payload.result;
    },

  },
});

export const {} = searchSlice.actions;

export default searchSlice;