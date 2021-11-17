import React, {useEffect, useRef, useState} from "react";
import "./HeaderIcon.scss";
import {menu_setting, menu_save, menu_change, menu_profile} from "../../../common/IconImage";


import {home, message, write, compass, heart, test, blackheart} from "../../../common/IconImage";
import HeaderLikeText from "./HeaderLikeText";


const HeaderIcon = () => {

  const [like, SetLike] = useState(false);
  const [myProfile, SetMyProfile] = useState(false);

  //외부클릭 감지
  function useOutsideClick(ref) {

    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          SetMyProfile(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function LikeOutsideClick(ref) {

    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          SetLike(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const likeSideRef = useRef(null);
  LikeOutsideClick(likeSideRef);

  const profileSideRef = useRef(null);
  useOutsideClick(profileSideRef);


  const likeClickHandler = (event) => {
    event.preventDefault();
    SetLike(!like);
  }

  const myProfileClickHandler = (event) => {
    event.preventDefault();
    SetMyProfile(!myProfile);
  }

  return (
    <>
      <div className="header_icon">
        <div className="nav_icon"><img src={home} alt="nav_icon"/></div>
        <div className="nav_icon"><img src={message} alt="nav_icon"/></div>
        <div className="nav_icon"><img src={write} alt="nav_icon"/></div>
        <div className="nav_icon"><img src={compass} alt="nav_icon"/></div>
        <div className="nav_icon"><img src={message} alt="nav_icon"/></div>
        <div className="nav_icon" ref={likeSideRef}>
          {like ? <img className="nav_heart" src={blackheart} alt="nav_icon" onClick={likeClickHandler}/> :
            <img className="nav_heart" src={heart} alt="nav_icon" onClick={likeClickHandler}/>}
          {like &&
          <div className="like_menu">
            <HeaderLikeText />
          </div>
          }
        </div>
        <div className="profile_icons" ref={profileSideRef}>
          {myProfile ? <img className="nav_profile" src={test} alt="nav_icon"  onClick={myProfileClickHandler}/> :
            <img src={test} alt="nav_icon"  onClick={myProfileClickHandler}/>}
          {myProfile &&
          <div className="myprofile">
            <div className="profile_menu">
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
              <div className="profile_logout">로그아웃</div>
            </div>
          </div>}
        </div>
      </div>
    </>
  )
}

export default HeaderIcon;