import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/api/Api";
import {history} from "../../history";
import {add_modal} from "../modal/modalSlice";


export const addPost = createAsyncThunk(
  "post/write",
  async ({formData}, thunkAPI) => {
    const AccessToken = localStorage.getItem("user")
    try {
      const response = await Api({
        url: `/post`,
        method: "POST",
        data: formData,

        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      if(response.data.ok){
        thunkAPI.dispatch(add_modal());
      }
      return response;
    } catch (e) {
      return false;
    }
  }
)

export const getPost = createAsyncThunk(
  "post/getPost",
  async (data, thunkAPI) => {
    const AccessToken = localStorage.getItem("user")
    try {
      const response = await Api({
        url: `/post`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      // console.log(response)
      return response.data;
    } catch (e) {

      alert("로그인을 다시해주세요")
      return false;
    }
  }
)

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async({postId}, thunkAPI) => {
    const AccessToken = localStorage.getItem("user")
    try {
      const response = await Api({
        url: `/post/${postId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      if(response.data.ok){
        history.push({ pathname: '/home'});
        return postId;
      }
      return response;
    }catch (e){
      console.log("삭제에러")
    }
  }
)

// 개별 페이지 불러오기
export const getPostDetail = createAsyncThunk(
  "post/getPostDetail",
  async (postId, thunkAPI) => {
    const AccessToken = localStorage.getItem("user")
    try {
      const response = await Api({
        url: `/post/${postId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      console.log(response)
      return response.data;
    } catch (e) {
      
      alert("로그인을 다시해주세요")
      return false;
    }
  }
)

//좋아요
export const likePost = createAsyncThunk(
  "post/likePost",
  async ({postId}, thunkAPI) => {
    const AccessToken = localStorage.getItem("user")
    try {
      const response = await Api({
        url: `/post/${postId}/like`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      return response;
    } catch (e) {
      return false;
    }
  }
)

//개인 포스트 가져오기
export const getUserPost = createAsyncThunk(
  "post/getUserPost",
  async(data, thunkAPI) => {

    const AccessToken = localStorage.getItem("user")
    try{
      const response = await Api({
        url: `user/${data}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      if(response.data.ok){
        return response;
      }
      console.log(response)
      return response;
    }catch (e){
      console.log(e.response);
    }
  }
)

// 게시물 저장하기
// export const savedPost = createAsyncThunk(
// 	"post/savedPost",
// 	async ({postId, AccessToken}) => {
// 		try {
// 			const response = await Api({
// 				url: `/post/${postId}/save`,
// 				method: "PUT",
// 				headers: {
// 					Authorization: `Bearer ${AccessToken}`,
// 				},
// 			})
// 			// console.log(response);
// 			return response.data;
// 		} catch (e) {

// 			return false;
// 		}
// 	},
// );

// 게시물 저장하기
export const savedPost = createAsyncThunk(
  "post/savedPost",
  async ({ postId, AccessToken, path }) => {
    try { 
      const response = await Api({ 
        url: `/post/${postId}/save`, 
        method: "PUT", 
        headers: { Authorization: `Bearer ${AccessToken}`, 
      }, 
    }); 
    return { postId: postId, path: path }; 
  } catch (e) { 
    return false; 
  } 
} 
);

//포스트 좋아요 목록
export const getLikeList = createAsyncThunk(
  "post/getLikeList",
  async({postId}, thunkAPI) => {
    const AccessToken = localStorage.getItem("user")
    try {
      const response = await Api({
        url: `/post/:${postId}/likeUsers`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      if(response.data.ok){
        return response;
      }
      console.log(response)
      return response;
    }catch (e){
      console.log(e.response);
    }
  }
)

