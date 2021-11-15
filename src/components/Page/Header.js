import React from "react";
import "./Header.scss";
import {message, Aftermessage, blackheart, blackhome, heart, home} from "./HeaderIcon"



const Header = () => {

  return(
    <>
      <div className="nav">
        <div className="nav_logo">
          로고
        </div>
        <div className="nav_input">
          <input placeholder="검색"/>
        </div>
        <div className="nav_icon">
          <img src = {blackhome} alt="nav_icon"/>
          <img src = {message} alt="nav_icon"/>
          <img src = {blackheart} alt="nav_icon"/>
          <img src = {blackheart} alt="nav_icon"/>
          <img src = {heart} alt="nav_icon"/>
          <img src = {blackheart} alt="nav_icon"/>
        </div>
      </div>
    </>
  )
}

export default Header;