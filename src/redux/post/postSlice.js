import {createSlice} from "@reduxjs/toolkit";

import {deletePost, getPost} from "./post";


const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    isFetching: false,
  },
  reducers: {

  },
  extraReducers: {
    [getPost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [deletePost.fulfilled]: (state, {payload}) => {
     const post_list = state.posts.filter(
       post=> post._id !== payload );
     state.posts = post_list;
    }
  },
});
export const {delete_post} = postSlice.actions;


export default postSlice;