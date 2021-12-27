import React, {useEffect, useState} from "react";
import "./Header.scss";
import HeaderIcon from "./HeaderIcon";
import Logo from "../../../image/InstaLogo.png";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import {socket} from "../../../common/socket";


import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const navigate = useNavigate();
	const toastId = React.useRef(null)

  const LogoClickHandler = () => {
    navigate(`/`, {replace: true})
  }


  useEffect(() => {
    console.log(socket)
  }, [])

  const [followSocket, SetFollowSocket] = useState();
  socket.on("follow", (payload) => {
    SetFollowSocket(payload)

  });


  // const postNotify = (payload) => toast( payload.post.contents, payload.sendUser.userId);
  // <img src={payload.post.imageUrl}/>

  socket.on("postLike", (payload) => {
		// postNotify(payload);
    const Msg = ({ closeToast, toastProps }) => (
      <div>
        Lorem ipsum dolor {toastProps.position}
        <img src={payload.post.imageUrl}/>
        <button onClick={closeToast}>Close</button>
      </div>
    );
    toast(<Msg/>)
    console.log(payload)
  },[]);

  return (
    <>
      <ToastContainer/>
      <div className="nav_header">
        <div className="nav">
          <div className="nav_logo" onClick={LogoClickHandler}>
            <img src={Logo} alt="logo"/>
          </div>
          <div className="nav_input">
            <HeaderSearch/>
          </div>
          <div className="nav_icon">
            <HeaderIcon followSocket={followSocket}/>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
