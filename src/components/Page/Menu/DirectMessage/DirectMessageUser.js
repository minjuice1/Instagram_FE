import "./_DirectMessage.scss";
import {useNavigate} from "react-router";
import {useState} from "react";
import DirectMessageCard from "./DirectMessageCard";
import {useSelector} from "react-redux";

const DirectMessageUser = ({chat, SetChat, SetMainDirect}) => {
  const navigate = useNavigate();


  const RoomList = useSelector(state=>state.socket.DirectRoomList);

  console.log(RoomList);
  const Room = [];

  const chatClickHandler = () => {
    navigate(`${Room}`);
    SetChat(true);
    SetMainDirect(false);
  }
  return(
    <>
      <div onClick={chatClickHandler}>
        {RoomList && RoomList.map((room) => (
          <DirectMessageCard roomId={room.roomId} Room={Room} user={room.user}/>
        ))}

      </div>
    </>
  )
};

export default DirectMessageUser;