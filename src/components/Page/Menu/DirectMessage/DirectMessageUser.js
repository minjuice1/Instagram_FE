import "./_DirectMessage.scss";
import {useLocation, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import DirectMessageCard from "./DirectMessageCard";
import {useSelector} from "react-redux";
import {chatSocket} from "../../../../common/socket";


const DirectMessageUser = ({chat, SetChat, SetMainDirect}) => {
  const navigate = useNavigate();



  const RoomList = useSelector(state=>state.socket.DirectRoomList);

  const Room = [];



  const chatClickHandler = () => {
    navigate(`${Room}`, {state: Room,});
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