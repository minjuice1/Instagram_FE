import "./_DirectMessage.scss";
import DirectMessageUser from "./DirectMessageUser";
import {useEffect, useState} from "react";
import NewMessageModal from "./NewMessageModal";
import {useLocation} from "react-router";
import NewMessage from "./NewMessage";
import DirectChat from "./DirectChat";
import {getRoomListDB} from "../../../../redux/socket/socket";
import {useDispatch} from "react-redux";
import add_direct from "../../../../image/icon/add_direct.png";

const DirectMessage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if(location.pathname === "/direct"){
      SetChat(false);
      SetMainDirect(true);
    }
  },[location])

  const [newMessage, SetNewMessage] = useState(false);
  const [mainDirect, SetMainDirect] = useState(true);
  const [chat, SetChat] = useState(false);


  const newMessageClickHandler = () => {
    SetNewMessage(true);
  }
  useEffect(() => {

    dispatch(getRoomListDB());
  },[dispatch])


  return(
    <>
      {newMessage && <NewMessageModal SetNewMessage={SetNewMessage}/>}
      <div className="insta_layout">
        <div className="direct_message">
          <div className="direct_myInfo">
            <div>hyemin085 </div>
            <div><img src={add_direct} alt="create_room" onClick={newMessageClickHandler}/></div>
          </div>
          <div>
            <DirectMessageUser chat={chat} SetChat={SetChat} SetMainDirect={SetMainDirect}/>
          </div>
        </div>
        <div className="my_message">
          {mainDirect && <NewMessage classname="new_direct_message" newMessage={newMessage} SetNewMessage={SetNewMessage}/> }
          {chat && <DirectChat/>}

        </div>
      </div>

    </>
  )
}

export default DirectMessage;