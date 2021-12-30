import "./_DirectMessage.scss";
import {my_message} from "../../../../common/IconImage";
import DirectMessageUser from "./DirectMessageUser";
import {useEffect, useState} from "react";
import NewMessageModal from "./NewMessageModal";
import {useLocation, useNavigate} from "react-router";
import NewMessage from "./NewMessage";
import DirectChat from "./DirectChat";

const DirectMessage = () => {
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/direct"){
      SetChat(false);
      SetMainDirect(true);
    }
  },[location])

  const [newMessage, SetNewMessage] = useState(false);
  const [newMessages, SetNewMessages] = useState(false);
  const [mainDirect, SetMainDirect] = useState(true);
  const [chat, SetChat] = useState(false);


  const newMessageClickHandler = () => {
    SetNewMessages(true);
  }

  return(
    <>
      {newMessages && <NewMessageModal newMessages={newMessages} SetNewMessages={SetNewMessages}/>}
      <div className="insta_layout">
        <div className="direct_message">
          <div>hyemin085 <a onClick={newMessageClickHandler}>여기</a></div>
          <div>
            <DirectMessageUser chat={chat} SetChat={SetChat} SetMainDirect={SetMainDirect}/>
          </div>
        </div>
        <div className="my_message">
          {mainDirect && <NewMessage newMessage={newMessage} SetNewMessage={SetNewMessage}/> }
          {chat && <DirectChat/>}

        </div>
      </div>
    </>
  )
}

export default DirectMessage;