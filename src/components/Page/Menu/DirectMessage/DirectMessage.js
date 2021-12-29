import "./_DirectMessage.scss";
import {my_message} from "../../../../common/IconImage";
import DirectMessageUser from "./DirectMessageUser";
import {useState} from "react";
import NewMessageModal from "./NewMessageModal";
import {useNavigate} from "react-router";
import NewMessage from "./NewMessage";
import DirectChat from "./DirectChat";

const DirectMessage = () => {


  const [newMessage, SetNewMessage] = useState(false);
  const [mainDirect, SetMainDirect] = useState(true);
  const [chat, SetChat] = useState(false);

  return(
    <>
      <div className="insta_layout">
        <div className="direct_message">
          <div>hyemin085</div>
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