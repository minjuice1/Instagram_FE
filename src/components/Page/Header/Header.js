import React, {useEffect, useState} from "react";
import "./Header.scss";
import HeaderIcon from "./HeaderIcon";
import Logo from "../../../image/InstaLogo.png";
import {useNavigate} from "react-router";
import HeaderSearch from "./HeaderSearch/HeaderSearch";


const Header = () => {
  const navigate = useNavigate();
	const toastId = React.useRef(null)

  const LogoClickHandler = () => {
    navigate(`/`, {replace: true})
  }


  return (
    <>

      <div className="nav_header">
        <div className="nav">
          <div className="nav_logo" onClick={LogoClickHandler}>
            <img src={Logo} alt="logo"/>
          </div>
          <div className="nav_input">
            <HeaderSearch/>
          </div>
          <div className="nav_icon">
            <HeaderIcon/>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
