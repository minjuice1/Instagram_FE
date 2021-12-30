import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/api/Api";

export const headerSearch = createAsyncThunk(
  "search/headerSearch",
  async(data, thunkAPI,path) => {
    const AccessToken = localStorage.getItem("user")
    console.log(data);
    try {
      const response = await Api({
        url: `/search?keyword=${data.searchResult}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      console.log(response);
      return response.data;

    } catch (e) {
      console.log(e.response)
      return false;
    }
  }
)

//해쉬태그 결과 값
export const SearchHashResult = createAsyncThunk(
  "search/SearchHashResult",
  async(data, thunkAPI) => {
    const AccessToken = localStorage.getItem("user")
    console.log(data);
    try {
      const response = await Api({
        url : `/search/${data.HashResult}`,
        method : 'GET',
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      console.log(response);
      return response.data;

    } catch (e) {
      console.log(e.response)
      return false;
    }
  }
);






//해시태그 팔로우/ 언팔로우
//위치 나중에 바꿀수도 있음

export const hashFollow = createAsyncThunk(
  "search/hashFollow",
  async(data, thunkAPI) => {
    const AccessToken = localStorage.getItem("user")
    console.log(data);
    try {
      const response = await Api({
        url : `/user/hashFollow/${data.HashResult}`,
        method : 'PUT',
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      })
      console.log(response);
      return response.data;

    } catch (e) {
      console.log(e.response)
      return false;
    }
  }
);


