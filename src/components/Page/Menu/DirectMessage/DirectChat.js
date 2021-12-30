import {useLocation, useParams} from "react-router";
import InputEmoji from "react-input-emoji";
import React, {useEffect, useState} from "react";
import "./_DirectMessage.scss";

const DirectChat = () => {
  const {Room} = useParams();
  console.log(Room);

  const [chatDirect, SetChatDirect] = useState("");

  function ChatOnEnter(chatDirect) {
    console.log(chatDirect)
  }

  const ChatClickHandler = (event) => {
    event.preventDefault();
    console.log(chatDirect);
    SetChatDirect("");
  };
  return (
    <>
      <div className="direct_chat">
        <div className="direct_user_info">
          여기 유저정보{Room}
        </div>
        <div className="direct_room">
          여기 채팅올라옴
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