import {createSlice} from "@reduxjs/toolkit";
import {headerSearch, SearchHashResult} from "./search";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    user:[],
    result:[],
    posts:[],
    searchHashtag: [],
  },
  reducers: {

  },

  extraReducers: {
    [headerSearch.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.result = action.payload.result;
    },
    [SearchHashResult.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.searchHashtag = action.payload.searchHashtag;
    }
  },
});

// export const {} = searchSlice.actions;

export default searchSlice;