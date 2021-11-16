import React, {useState} from "react";
import "./HeaderIcon.scss";
import profile from "../../../image/profile.jpg";


import {home, message, write, compass, heart,test, blackheart} from "../../../common/IconImage";
const HeaderIcon = () => {

  const [like, SetLike] = useState(false);

  const likeClickHandler = () => {
    SetLike(!like);
  }

  if(like){
    return(
      <>
        <img src = {home} alt="nav_icon"/>
        <img src = {message} alt="nav_icon"/>
        <img src = {write} alt="nav_icon"/>
        <img src = {compass} alt="nav_icon"/>
        <img className="nav_heart" src = {blackheart} alt="nav_icon" onClick={likeClickHandler}/>
        <img src = {test} alt="nav_icon"/>
        <div className="like_menu">
          <div className="like_cmt">
            <div><img className="nav_profile_img" src={profile}/>헹구님이 회원님을 팔로우하기 시작했습니다. 3시간전</div>
          </div>

        </div>

      </>
    )
  }

  return(
    <>
      <img src = {home} alt="nav_icon"/>
      <img src = {message} alt="nav_icon"/>
      <img src = {write} alt="nav_icon"/>
      <img src = {compass} alt="nav_icon"/>
      {like? <img className="nav_heart" src = {blackheart} alt="nav_icon" onClick={likeClickHandler}/> :
        <img className="nav_heart" src = {heart} alt="nav_icon" onClick={likeClickHandler} />}
      <img src = {test} alt="nav_icon"/>
    </>
  )
}

export default HeaderIcon;