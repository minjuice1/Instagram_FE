import {createSlice} from "@reduxjs/toolkit";


const socketSlice = createSlice({
  name: 'search',
  initialState: {
    userList: [],
    userTest:[],
  },
  reducers: {
    saveUser : (state, action) => {
      console.log(action.payload)
      if(state.userList.indexOf(action.payload)){
        return;
      }
        state.userList = state.userList.push(action.payload);

    },
    deleteUser: (state, action) => {
      state.userList = state.userList.filter( userList => userList !== action.payload)
    },

  },

  extraReducers: {

  },
});

export const {saveUser, deleteUser} = socketSlice.actions;

export default socketSlice;