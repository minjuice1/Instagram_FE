import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/api/Api";

export const headerSearch = createAsyncThunk(
  "search/headerSearch",
  async(data, thunkAPI) => {
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

export const headerSearchResult = createAsyncThunk(
  "search/headerSearchResult",
  async(data, thunkAPI) => {
    const AccessToken = localStorage.getItem("user")
    console.log(data);
    try {
      const response = await Api({
        url : `/searchResult?keyword=${data.searchResult}`,
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

