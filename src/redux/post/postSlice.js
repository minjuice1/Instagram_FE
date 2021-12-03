import {createSlice} from "@reduxjs/toolkit";

import {addPost, deletePost, getPost, getPostDetail} from "./post";
import { addComment, deleteComment, likedComment } from './comment';


const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    isFetching: false,
    postDetail: [],
    comment: [],
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
    },
    [addPost.pending]: (state, action) =>{
    },
    [getPostDetail.fulfilled]: (state, action) => {
      state.postDetail = action.payload.post;
      state.comment = action.payload.comment;
    },
    [addComment.fulfilled] : (state, action) => {
			state.comment.push(action.payload.comment);
			console.log(action.payload);
    },
    [deleteComment.fulfilled]: (state, action) => {			
			state.comment = state.comment.filter(
				(cnt) => cnt._id !== action.payload );
      console.log(state.comment);		
		 },
  },
});
export const {delete_post} = postSlice.actions;


export default postSlice;