import {getPost, likePost} from "./post";
import {createSlice} from "@reduxjs/toolkit";



const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],

  },
  reducers: {
  },
  extraReducers: {
    [getPost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
  },
});
export const {post_like} = postSlice.actions;


export default postSlice;