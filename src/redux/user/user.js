import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../common/api/Api";
import {useNavigate} from "react-router-dom";

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
        console.log(response)
        const accessToken = response.data.token;
        localStorage.setItem("user", accessToken);
        // if(response.data.ok){
        //   const navigate = useNavigate();
        //   navigate("/")
        // }
      })
      return response;
    }catch (e) {
      const navigate = useNavigate();
      function loginError() {
        alert("로그인실패")
        navigate(-1);
      }
      loginError();
      return false;
    }
  }
)
