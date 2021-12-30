import {createSlice} from "@reduxjs/toolkit";
import {getRoomListDB} from "./socket";


const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    userList: [],
    DirectRoomList: [],
  },
  reducers: {
    saveUser : (state, action) => {
      console.log(action.payload)
      state.userList.push(action.payload);
    },

    deleteUser: (state,{payload}) => {
      console.log(payload);
      state.userList = state.userList.filter((user) => user._id !== payload);
    },

  },

  extraReducers: {
    [getRoomListDB.fulfilled] : (state, action) => {
      state.DirectRoomList = action.payload.chatList;
    }
  },
});

export const {saveUser, deleteUser} = socketSlice.actions;

export default socketSlice;