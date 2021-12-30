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
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e.response.data)
    }
  }
)

export const createRoomDB = createAsyncThunk(
  "socket/createRoomDB",
  async({RoomId, check_user}, thunkAPI) => {
    console.log("방만들기", RoomId, check_user);
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


// export const headerSearch = createAsyncThunk(
//   "search/headerSearch",
//   async(data, thunkAPI,path) => {
//     const AccessToken = localStorage.getItem("user")
//     console.log(data);
//     try {
//       const response = await Api({
//         url: `/search?keyword=${data.searchResult}`,
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${AccessToken}`,
//         }
//       })
//       console.log(response);
//       return response.data;
//
//     } catch (e) {
//       console.log(e.response)
//       return false;
//     }
//   }
// )