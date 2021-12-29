import socketIO from "socket.io-client";


export const socket = socketIO("http://3.38.99.84:4000", {
  extraHeaders: { authorization: localStorage.getItem("user") },
});