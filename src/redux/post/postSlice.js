import {createSlice} from "@reduxjs/toolkit";

import {deletePost, getLikeList, getPost, getPostDetail, getUserPost, savedPost, likePost} from "./post";
import { addComment, deleteComment, likedComment, addReplyComment, deleteReplyComment, likedReplyComment, getLikedListComment } from './comment';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    user: [],
    posts: [],
    postDetail: [],
    comment: {
      childComments: [],
    },
    likeUsers:[],
    likeUsersCmt: [],
    replyTag: "",
  },
  reducers: {
    replyReducer : (state, action) => {
      state.replyTag = action.payload;
    },
  },
  extraReducers: {
    [getPost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [getUserPost.fulfilled] : (state, action) => {
      console.log(action);
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
      console.log(action);
      if (action.payload.path === "main") { 
        const post = state.posts.findIndex( (p) => p._id === action.payload.postId ); 
        state.posts[post].isPostSaved = !state.posts[post].isPostSaved; 
      } else { 
        state.postDetail[0].isPostSaved = !state.postDetail[0].isPostSaved; 
      } 
    },
    [likePost.fulfilled]: (state, action) => {
      console.log(action);
      if (action.payload.path === "main") {
      const idx = state.posts.findIndex((p) => p._id === action.payload.postId);
      state.posts[idx].isLike = !state.posts[idx].isLike;
      } else {
        state.postDetail[0].isLike = !state.postDetail[0].isLike;
      }
    },

    //좋아요 리스트 목록 가져오기기
    [getLikeList.fulfilled]: (state, action) => {
      state.likeUsers = action.payload.data.likeUsers;
    },

    // Comment
    [addComment.fulfilled]: (state, action) => { 
      if (action.payload.path === "main") { 
        const idx = state.posts.findIndex( (c) => c._id === action.payload.data.comment.postId ); 
        state.posts[idx].commentCount++;
        state.posts[idx].comments.unshift(action.payload.data.comment); 
      } else {
        action.payload.data.comment.likeCount = 0;
        state.comment.push(action.payload.data.comment);
      } 
    },
    [deleteComment.fulfilled]: (state, action) => {			
			state.comment = state.comment.filter(
				(cnt) => cnt._id !== action.payload );
		},
    [likedComment.fulfilled]: (state, action) => {
      console.log(action);
      const idx = state.comment.findIndex((c) => c._id === action.meta.arg.commentId);
      if (action.payload.path === "detailCmt") {
        if(!state.comment[idx].isLike) {
          state.comment[idx].isLike = true;
          state.comment[idx].likeCount = state.comment[idx].likeCount + 1;
        }
        else {
          state.comment[idx].isLike = false;
          state.comment[idx].likeCount = state.comment[idx].likeCount - 1;
        }
      } else {
        const post = state.posts.findIndex((p) => p._id === action.payload.postId);
        state.posts[post].comments[idx].isLike = !state.posts[post].comments[idx].isLike;
      }
    },
    // 댓글, 대댓글 좋아요 누른 사람 목록 보기
    [getLikedListComment.fulfilled]: (state, action) => {
      console.log(action);
      state.likeUsersCmt = action.payload.data.likeUsers;
    },

     //replyComment
    [addReplyComment.fulfilled] : (state, action) => {
      console.log(action);
      action.payload.data.reComment.likeCount = 0;
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
      if(!state.comment[idx].childComments[re].isLike) {
        state.comment[idx].childComments[re].isLike = true;
        state.comment[idx].childComments[re].likeCount = state.comment[idx].childComments[re].likeCount + 1;
      }
      else {
        state.comment[idx].childComments[re].isLike = false;
        state.comment[idx].childComments[re].likeCount = state.comment[idx].childComments[re].likeCount - 1;
      }
    },
  },
});
export const {delete_post, replyReducer} = postSlice.actions;

export default postSlice;