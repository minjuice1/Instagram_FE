import {menu_change, menu_profile, menu_save, menu_setting} from "../../../common/IconImage";
import React, {useEffect} from "react";
import {getProfile, logout} from "../../../redux/user/user";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";


const HeaderUser = ({SetMyProfile}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogoutClickHandler = () => {
    dispatch(logout());
    navigate(`/login}`, {replace: true})
  }




  const id = useSelector(state=>state.user.user.userId);

  const editUserClickHandler = () => {
    navigate(`/profile/${id}`,{state: id})
    SetMyProfile(false);
  }

  // 저장됨으로 이동
  const savedProfileClickHandler = () => {
    navigate(`/profile/${id}/saved`, {replace: true})
  }


  return(
    <div className="myprofile">
      <div className="profile_menu" onClick={editUserClickHandler}>
        <img src={menu_profile}/>
        <div>프로필</div>
      </div>
      <div className="profile_menu" onClick={savedProfileClickHandler}>
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