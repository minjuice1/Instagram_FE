import {createSlice} from "@reduxjs/toolkit";

import {deletePost, getPost, getPostDetail, getUserPost, savedPost} from "./post";
import { addComment, deleteComment, likedComment, addReplyComment, deleteReplyComment, likedReplyComment } from './comment';


const postSlice = createSlice({
  name: 'post',
  initialState: {
    user: [],
    savedPost: {
      postId: [],
      isPost: false,
    },
    posts: [],
    postDetail: [],
    comment: {
      isLiked: false,
      like: [],
      childComments: {
        isLiked: false,
        like: [],
      },
      writer: [],
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
      state.postDetail = action.payload.post;
      state.comment = action.payload.comment;
    },
    [savedPost.fulfilled]: (state, action) => {
      state.savedPost.postId = action.meta.arg.postId;
      state.savedPost.isPost = !state.savedPost.isPost;
      
    },


    //comment
    [addComment.fulfilled] : (state, action) => {
      // const idx = state.posts.filter(post=> post._id !== action.meta.arg.postId);
      // state.posts[idx].comments.push(action.payload.comment);
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
      const idx = state.comment.findIndex((c) => c._id === action.meta.arg.commentId);
      state.comment[idx].childComments.push(action.payload.reComment);
    },
    [deleteReplyComment.fulfilled]: (state, action) => {		
      const idx = state.comment.findIndex((c) => c._id === action.meta.arg.Id);
			state.comment[idx].childComments = state.comment[idx].childComments.filter(
				(re) => re._id !== action.meta.arg.commentId );
		 },
     [likedReplyComment.fulfilled]: (state, action) => {
      const idx = state.comment.findIndex((c) => c._id === action.meta.arg.Id);
      const re = state.comment[idx].childComments.findIndex((c) => c._id === action.meta.arg.commentId);
      state.comment[idx].childComments[re].isLike = !state.comment[idx].childComments[re].isLike;
      state.comment[idx].childComments[re].like = action.meta.arg.Relike;
    },
  },
});
export const {delete_post, replyReducer} = postSlice.actions;

export default postSlice;