import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/api/Api";

export const getRoomListDB = createAsyncThunk(
  "socket/getRoomListDB",
  async(data, thunkAPI) => {
    const AccessToken = localStorage.getItem("user");
    try {
      const response = await Api({
        url: `/chat`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      return response.data;
    } catch (e) {
      console.log(e.response.data)
    }
  }
)

export const createRoomDB = createAsyncThunk(
  "socket/createRoomDB",
  async({RoomId, check_user}, thunkAPI) => {
    const AccessToken = localStorage.getItem("user");
    try{
      const response = await Api({
        url: `/chat/${RoomId}`,
        method: 'POST',
        data: {participant: check_user},
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      return response.data;
    }catch(e) {
      console.log(e.response.data)
    }
  }
)

export const getChatContents = createAsyncThunk(
  "socket/getChatContents",
  async(data, thunkAPI) => {
    console.log(data);
    try{
      const response = await Api({
        url: `/chat/${data.Room}`,
      })
      console.log(response.data);
      return response.data;
    }catch (e){
      console.log(e.response.data);
    }
  }
)

