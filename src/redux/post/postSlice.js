import {createSlice} from "@reduxjs/toolkit";

import {deletePost, getPost, getPostDetail, getUserPost} from "./post";
import {getProfile} from "../user/user";



const postSlice = createSlice({
  name: 'post',
  initialState: {
    user: [],
    savedPost: [],
    posts: [],
    postDetail: [],
    comment: [],
  },
  reducers: {

  },
  extraReducers: {
    [getPost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [getUserPost.fulfilled] : (state, action) => {
      state.post = action.payload.data.post;
      state.user = action.payload.data.user;
      state.savedPost = action.payload.data.savedPost;
    },
    [deletePost.fulfilled]: (state, {payload}) => {
     const post_list = state.posts.filter(
       post=> post._id !== payload );
     state.posts = post_list;
     console.log(post_list);
    },
    [getPostDetail.fulfilled]: (state, action) => {
      state.postDetail = action.payload.post;
      state.comment = action.payload.comment;
    },
  },
});
export const {delete_post} = postSlice.actions;


export default postSlice;