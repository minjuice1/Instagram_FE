import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/api/Api";
import {useNavigate} from "react-router";

export const addPost = createAsyncThunk(
  "post/write",
  async({formData}, thunkAPI) => {
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
    }catch(e){
      return false;
    }
  }
)

export const getPost = createAsyncThunk(
  "post/getPost",
  async(data, thunkAPU) => {
    const AccessToken = localStorage.getItem("user")
    try {
      const response = await Api({
        url: `/post`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      return response.data;
    }catch(e){

      alert("로그인을 다시해주세요")

      return false;
    }
  }
)