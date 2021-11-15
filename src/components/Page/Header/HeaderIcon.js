import React, {useState} from "react";
import {message, Aftermessage, blackheart, blackhome, heart, home} from "./HeaderIconImage"

const HeaderIcon = () => {

  const [like, Setlike] = useState(false);



  console.log(like);
  return(
    <>
      <img src = {blackhome} alt="nav_icon"/>
      <img src = {message} alt="nav_icon"/>
      <img src = {blackheart} alt="nav_icon"/>
      <img src = {blackheart} alt="nav_icon"/>
      <img src = {heart} alt="nav_icon" onClick={like}/>
      <img src = {blackheart} alt="nav_icon"/>
    </>
  )
}

export default HeaderIcon;