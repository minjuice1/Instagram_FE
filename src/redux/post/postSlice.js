import {createSlice} from "@reduxjs/toolkit";

import {addPost, deletePost, getPost, getPostDetail} from "./post";
import { addComment, deleteComment, likedComment } from './comment';


const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    isFetching: false,
    postDetail: [],
    comment: {
      isLiked: false,
      like: [],
    },
    replyTag: "",
    
  },
  reducers: {
    replyReducer : (state, action) => {
      state.replyTag = action.payload;
      // console.log("replyTag 호출됨", state.replyTag);
    },

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

    //comment
    [addComment.fulfilled] : (state, action) => {
			state.comment.push(action.payload.comment);
    },
    [deleteComment.fulfilled]: (state, action) => {			
			state.comment = state.comment.filter(
				(cnt) => cnt._id !== action.payload );
		 },
     [likedComment.fulfilled]: (state, action) => {
       const idx = state.comment.findIndex((c) => c._id === action.meta.arg.commentId);
       state.comment[idx].isLike = !state.comment[idx].isLike;
       state.comment[idx].like.length = !state.comment[idx].like.length;
     },
  },
});
export const {delete_post, replyReducer} = postSlice.actions;

export default postSlice;