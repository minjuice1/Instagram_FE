import {useLocation, useNavigate, useParams} from "react-router";
import InputEmoji from "react-input-emoji";
import React, {useEffect, useState} from "react";
import "./_DirectMessage.scss";
import {useDispatch} from "react-redux";
import {getChatContents} from "../../../../redux/socket/socket";
import {chatSocket} from "../../../../common/socket";



const DirectChat = () => {
  const {Room} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [chatDirect, SetChatDirect] = useState("");
  const [chat, setChat] = useState([]);

  //
  useEffect(() => {
    chatSocket.emit("joinRoom", Room)

    console.log(chatSocket);

  },[Room])




  useEffect(() => {
    dispatch(getChatContents({
      Room
    }))
  },[dispatch])

  useEffect(() => {
    chatSocket?.on("newMessage", (payload) => {
      setChat((prev) => [...prev, payload]);
    });
  }, [chatSocket]);

  // const LeaveRoomClickHandler = () => {
  //   socket.disconnect();
  //   navigate(0);
  // }

  function ChatOnEnter(chatDirect) {
    chatSocket.emit("newMessage", chatDirect);
    setChat((prev) => [
      ...prev,
      {
        user: { userId: "나", profileImage: null },
        chatDirect,
      },
    ]);
  }

  const ChatClickHandler = (event) => {
    event.preventDefault();
    chatSocket.emit("newMessage", chatDirect);
    setChat((prev) => [
      ...prev,
      {
        user: { userId: "나", profileImage: null },
        chatDirect,
      },
    ]);
    SetChatDirect("");
  };

  const renderChat = () => {
    return chat.map((data, index) => (
      <div key={index}>
        <h3>
          <img src={data.user ? data.user.profileImage : ""} />
          {data.user && data.user.userId}: <span>{data.message}</span>
        </h3>
      </div>
    ));
  };


  return (
    <>
      <div className="direct_chat">
        <div className="direct_user_info">
          여기 유저정보{Room}
        </div>
        <div className="direct_room">
          {renderChat()}
        </div>
        <div className="direct_input">

            <InputEmoji
              borderColor="white"
              placeholder="채팅을 입력하세요"
              fontSize="14"
              value={chatDirect}
              onChange={SetChatDirect}
              cleanOnEnter
              onEnter={ChatOnEnter}/>
          {chatDirect &&  <button className="direct_button" onClick={ChatClickHandler}>보내기</button>}

      </div>
      </div>
    </>
  )
}

export default DirectChat;