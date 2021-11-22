import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/api/Api";

export const addPost = createAsyncThunk(
  "post/write",
  async({formData, AccessToken}, thunkAPI) => {

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
    try {
      const response = await Api({
        url: `/post`,
        method: "GET",
      })
      return response.data;
    }catch(e){
      return false;
    }
  }
)