import React, {useEffect, useState} from "react";
import "./Header.scss";
import HeaderIcon from "./HeaderIcon";
import Logo from "../../../image/InstaLogo.png";
import {useNavigate} from "react-router";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import search_icon from "../../../image/icon/search_icon.png";


const Header = () => {
  const navigate = useNavigate();


  const LogoClickHandler = () => {
    navigate(`/`, {replace: true})
  }
  const [search, SetSearch] = useState(true);
  const searchIconClickHandler = () => {
    SetSearch(search => !search);
  }

  return (
    <>

      <div className="nav_header">
        <div className="nav">
          <div className="nav_logo" onClick={LogoClickHandler}>
            <img src={Logo} alt="logo"/>
          </div>
          <div className="nav_input" onClick={searchIconClickHandler}>
            <HeaderSearch/>
          </div>
          <div className="nav_icon" >
            <HeaderIcon/>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
