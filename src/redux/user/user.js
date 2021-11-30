import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/api/Api";
import {history} from "../../history";




export const singUp = createAsyncThunk(
  "user/signup",
async(data, thunkAPI) => {
    try {
      const response = await Api({
        url: `/auth/signup`,
        method: "POST",
        data: {
          email: data.email,
          name: data.name,
          userId: data.userId,
          password: data.password,
        },
      });
    } catch(e) {
      return thunkAPI.rejectWithValue({
        error: "회원가입실패"
      });
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async(data, thunkAPI) => {
    try {
      const response = await Api({
        url : "/auth/login",
        method: "POST",

        data: {
          id: data.email,
          password: data.password,
        },
      }).then(response => {
        const accessToken = response.data.token;
        localStorage.setItem("user", accessToken);
        if(response.data.ok){
          history.push({ pathname: '/home'});
        }
      })
      return response;
    }catch (e) {

      function loginError() {
        alert("로그인실패")
      }
      loginError();
      return false;
    }
  }
)

export const logout = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    localStorage.removeItem("user");
    history.push({ pathname: '/login'});
  }

);

export const getProfile = createAsyncThunk(
  "user/getProfile",
  async(data, thunkAPI) => {
    const AccessToken = localStorage.getItem("user")
    try{
      const response = await Api({
        url: `/accounts/edit`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        }
      })
      console.log(response);
      return response;
    }catch (e) {
      return false;
    }
  }
)