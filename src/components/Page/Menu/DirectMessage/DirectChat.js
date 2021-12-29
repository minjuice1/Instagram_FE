import {useParams} from "react-router";
import InputEmoji from "react-input-emoji";
import React, {useState} from "react";
import "./_DirectMessage.scss";

const DirectChat = () => {
  const {userId} = useParams();

  const [chatDirect, SetChatDirect] = useState("");
  console.log(userId);

  function ChatOnEnter(chatDirect) {
    console.log(chatDirect)
  }

  const ChatClickHandler = (event) => {
    event.preventDefault();

    SetChatDirect("");
  };
  return (
    <>
      <div className="direct_chat">

        <div className="direct_input">
          <label>
            <InputEmoji
              borderColor="blue"
              placeholder="채팅을 입력하세요"
              fontSize="14"
              value={chatDirect}
              onChange={SetChatDirect}
              cleanOnEnter
              onEnter={ChatOnEnter}
            />
          </label>
        </div>
      </div>
    </>
  )
}

export default DirectChat;