import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/api/Api";
import {history} from "../../history";



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
      }).then(response => {
        console.log(response)
      })
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
      console.log(response)
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

