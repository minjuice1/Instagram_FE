import {createSlice} from "@reduxjs/toolkit";

import {deletePost, getLikeList, getPost, getPostDetail, getUserPost, savedPost, likePost, randomPost} from "./post";
import { addComment, deleteComment, likedComment, addReplyComment, deleteReplyComment, likedReplyComment } from './comment';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    user: [],
    posts: [],
    postDetail: [],
    comment: [],
    likeUsers:[],
    replyTag: "",
    randomPosts: [],
    recommendedUser: [],
  },
  reducers: {
    replyReducer : (state, action) => {
      state.replyTag = action.payload;
    },
  },
  extraReducers: {
    [getPost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.recommendedUser = action.payload.recommendedUser;
    },
    [getUserPost.fulfilled] : (state, action) => {
      console.log(action.payload);
      state.post = action.payload.post;
      state.user = action.payload.user;
      state.savedPost = action.payload.savedPost;
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
      if (action.payload.path === "main") { 
        const post = state.posts.findIndex( (p) => p._id === action.payload.postId ); 
        state.posts[post].isPostSaved = !state.posts[post].isPostSaved; 
      } else { 
        state.postDetail[0].isPostSaved = !state.postDetail[0].isPostSaved; 
      } 
    },
    [likePost.fulfilled]: (state, action) => {
    },

    // Comment
    [addComment.fulfilled]: (state, action) => { 
      if (action.payload.path === "main") { 
        const idx = state.posts.findIndex( (c) => c._id === action.payload.data.comment.postId ); 
        state.posts[idx].commentCount++;
        state.posts[idx].comments.unshift(action.payload.data.comment); 
      } else { 
        state.comment.push(action.payload.data.comment); 
      } 
    },

    [deleteComment.fulfilled]: (state, action) => {			
			state.comment = state.comment.filter(
				(cnt) => cnt._id !== action.payload );
		},
    [likedComment.fulfilled]: (state, action) => {
      console.log(action);
      if (action.payload.path === "detailCmt") {
        const idx = state.comment.findIndex((c) => c._id === action.meta.arg.commentId);
        state.comment[idx].isLike = !state.comment[idx].isLike;
      } else {
        const post = state.posts.findIndex((p) => p._id === action.payload.postId);
        console.log(post);
        const cmt = state.posts[post].comments.findIndex((c) => c._id === action.payload.commentId);
        console.log(cmt);
        state.posts[post].comments[cmt].isLike = !state.posts[post].comments[cmt].isLike;
      }
    },

    //좋아요 리스트 목록 가져오기기
    [getLikeList.fulfilled]: (state, action) => {
      state.likeUsers = action.payload.data.likeUsers;
    },

     //replyComment
    [addReplyComment.fulfilled] : (state, action) => {
      console.log(action);
      const idx = state.comment.findIndex((c) => c._id === action.payload.commentId);
      state.comment[idx].childComments.push(action.payload.data.reComment);
    },
    [deleteReplyComment.fulfilled]: (state, action) => {
      console.log(action);		
      const idx = state.comment.findIndex((c) => c._id === action.meta.arg.Id);
			state.comment[idx].childComments = state.comment[idx].childComments.filter(
				(re) => re._id !== action.payload.commentId );
		},
    [likedReplyComment.fulfilled]: (state, action) => {
      console.log(action);
      const idx = state.comment.findIndex((c) => c._id === action.meta.arg.Id);
      const re = state.comment[idx].childComments.findIndex((c) => c._id === action.payload.commentId);
      state.comment[idx].childComments[re].isLike = !state.comment[idx].childComments[re].isLike;
      state.comment[idx].childComments[re].likeCount = action.meta.arg.Relike;
    },
    [randomPost.fulfilled]:(state, action) => {
      state.randomPosts =  action.payload.data.randomPost;
    }
  },
});
export const {replyReducer} = postSlice.actions;

export default postSlice;