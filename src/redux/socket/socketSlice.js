import {createSlice} from "@reduxjs/toolkit";


const socketSlice = createSlice({
  name: 'search',
  initialState: {
    userList: [],
  },
  reducers: {
    saveUser : (state, action) => {
      console.log(action.payload)
      state.userList.push(action.payload);
      // console.log(action.payload);
      // state.userList = action.payload.checkUser;
      // const user_list = action.payload;
      // state.userList = user_list;

    },
    deleteUser: (state,{payload}) => {
      // console.log(payload.userId);
      console.log(payload);
      state.userList = state.userList.filter((user) => user.userId !== payload);
    },

  },

  extraReducers: {

  },
});

export const {saveUser, deleteUser} = socketSlice.actions;

export default socketSlice;