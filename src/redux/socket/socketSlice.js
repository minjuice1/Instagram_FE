import {createSlice} from "@reduxjs/toolkit";
import {getChatContents, getRoomListDB} from "./socket";


const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    userList: [],
    DirectRoomList: [],
    chatData: [],
    participant: [],
  },
  reducers: {
    saveUser : (state, action) => {
      state.userList.push(action.payload);
    },

    deleteUser: (state,{payload}) => {
      state.userList = state.userList.filter((user) => user._id !== payload);
    },

  },

  extraReducers: {
    [getRoomListDB.fulfilled] : (state, action) => {
      state.DirectRoomList = action.payload.chatList;
    },
    [getChatContents.fulfilled] : (state, action) => {
      console.log(action.payload)
      state.chatData = action.payload.chatData;
      state.participant = action.payload.participant;
    },
  }
});

export const {saveUser, deleteUser} = socketSlice.actions;

export default socketSlice;