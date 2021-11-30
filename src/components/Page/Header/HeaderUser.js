import {menu_change, menu_profile, menu_save, menu_setting} from "../../../common/IconImage";
import React from "react";
import {logout} from "../../../redux/user/user";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";


const HeaderUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogoutClickHandler = () => {
    dispatch(logout());
  }
  const edituserClickHandler = () => {
    navigate("/edituser");
  }

  return(
    <div className="myprofile">
      <div className="profile_menu" onClick={edituserClickHandler}>
        <img src={menu_profile}/>
        <div>프로필</div>
      </div>
      <div className="profile_menu">
        <img src={menu_save}/>
        <div>저장됨</div>
      </div>
      <div className="profile_menu">
        <img src={menu_setting}/>
        <div>설정</div>
      </div>
      <div className="profile_menu">
        <img src={menu_change}/>
        <div>계정전환</div>
      </div>
      <div className="profile_menu">
        <div className="profile_logout" onClick={userLogoutClickHandler}>로그아웃</div>
      </div>
    </div>
  )
}

export default HeaderUser;