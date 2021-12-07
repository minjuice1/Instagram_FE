import {createSlice} from "@reduxjs/toolkit";

import {deletePost, getPost, getPostDetail, getUserPost} from "./post";
import { addComment, deleteComment, likedComment, addReplyComment, deleteReplyComment } from './comment';


const postSlice = createSlice({
  name: 'post',
  initialState: {
    user: [],
    savedPost: [],
    posts: [],
    postDetail: [],
    comment: {
      isLiked: false,
      like: [],
      childComments: [],
    },
    
    replyTag: "",
    
  },
  reducers: {
    replyReducer : (state, action) => {
      // console.log(action.payload);
      state.replyTag = action.payload;
      // console.log("replyTag 호출됨", state.replyTag);
    },

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
    },
    [getPostDetail.fulfilled]: (state, action) => {
      // console.log(action.payload);
      // console.log(action.payload.comment);
      state.postDetail = action.payload.post;
      state.comment = action.payload.comment;
      
    },

    //comment
    [addComment.fulfilled] : (state, action) => {
      console.log(action);
			state.comment.push(action.payload.comment);
    },
    [deleteComment.fulfilled]: (state, action) => {			
			state.comment = state.comment.filter(
				(cnt) => cnt._id !== action.payload );
		 },
     [likedComment.fulfilled]: (state, action) => {
       const idx = state.comment.findIndex((c) => c._id === action.meta.arg.commentId);
       state.comment[idx].isLike = !state.comment[idx].isLike;
       state.comment[idx].like = action.meta.arg.like;
     },

     //replyComment
     [addReplyComment.fulfilled] : (state, action) => {
      console.log(action);
      const idx = state.comment.findIndex((c) => c._id === action.meta.arg.commentId);
      const re = state.comment[idx].childComments.push(action.payload.reComment);
      console.log(idx);
      console.log(re);
			// state.comment[idx].childComments[re].push(action.payload.reComment);
      // console.log(state.replyComment);
    },
    [deleteReplyComment.fulfilled]: (state, action) => {			
			// state.comment.childComments = state.comment.childComments.filter(
			// 	(cnt) => cnt._id !== action.payload.reComment );
		 },
  },
});
export const {delete_post, replyReducer} = postSlice.actions;

export default postSlice;