import React from "react";
import "./Header.scss";

import SearchIcon from '@mui/icons-material/Search';
import HeaderIcon from "./HeaderIcon";
import Logo from "../../../image/InstaLogo.png";



const Header = () => {

  return(
    <>
      <div className="nav_header">
      <div className="nav">
        <div className="nav_logo">
          <img src={Logo}/>
        </div>
        <div className="nav_input">
          <SearchIcon className="search_icon"
          fontSize="12px"/>
          <input placeholder="검색"/>
        </div>
        <div className="nav_icon">
          <HeaderIcon/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Header;