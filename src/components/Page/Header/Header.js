import React from "react";
import "./Header.scss";

import SearchIcon from '@mui/icons-material/Search';
import HeaderIcon from "./HeaderIcon";
import Logo from "../../../image/InstaLogo.png";
import {Link} from "react-router-dom";



const Header = () => {

  return(
    <>
      <div className="nav_header">
      <div className="nav">
        <div className="nav_logo">
          <Link to = "/">
          <img src={Logo}/>
          </Link>
        </div>
        <div className="nav_input">
          <label for="search_icon"><SearchIcon
                             fontSize="12px"/></label>
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