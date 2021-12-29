import "./_DirectMessage.scss";
import {useNavigate} from "react-router";
import {useState} from "react";
import DirectMessageCard from "./DirectMessageCard";

const DirectMessageUser = ({chat, SetChat, SetMainDirect}) => {
  const navigate = useNavigate();
  const userId = "hyemgu";

  const chatClickHandler = () => {
    navigate(`/direct/${userId}`);
    SetChat(true);
    SetMainDirect(false);
  }
  return(
    <>
      <div onClick={chatClickHandler}>
      <DirectMessageCard/>
      </div>
    </>
  )
};

export default DirectMessageUser;