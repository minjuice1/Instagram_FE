import {createSlice} from "@reduxjs/toolkit";

import {addPost, deletePost, getPost, getPostDetail} from "./post";
import { addComment, deleteComment, likedComment, addReplyComment, deleteReplyComment } from './comment';


const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    isFetching: false,
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
      console.log(action.payload);
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
       state.comment[idx].like.length = !state.comment[idx].like.length;
     },

     //replyComment
     [addReplyComment.fulfilled] : (state, action) => {
      console.log(action);
      // const idx = state.comment.childComments.findIndex((c) => c._id === action.payload.reComment);
      // console.log(idx);
			// state.comment.childComments.push(action.payload.reComment);
      // console.log(state.replyComment);
    },
    [deleteReplyComment.fulfilled]: (state, action) => {			
			// state.comment.childComments = state.comment.childComments.filter(
				// (cnt) => cnt._id !== action.payload.reComment );
		 },
  },
});
export const {delete_post, replyReducer} = postSlice.actions;

export default postSlice;