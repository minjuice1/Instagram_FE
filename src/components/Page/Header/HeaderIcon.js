import React, {useEffect, useRef, useState} from "react";
import "./HeaderIcon.scss";
import profile from "../../../image/profile.jpg";


import {home, message, write, compass, heart,test, blackheart} from "../../../common/IconImage";




const HeaderIcon = () => {

  const [like, SetLike] = useState(false);
  const [myProfile, SetMyProfile] = useState(false);
  //외부클릭 감지
  function useOutsideClick(ref) {

    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log(ref.current)
          SetLike(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const outsideRef = useRef(null);
  useOutsideClick(outsideRef);


  const likeClickHandler = (event) => {
   event.preventDefault();
    SetLike(!like);
  }

  const myProfileClickHandler = (event) => {
    event.preventDefault();
    SetMyProfile(!myProfile);
    console.log(myProfile);
  }

  return(
    <>
      <img src = {home} alt="nav_icon"/>
      <img src = {message} alt="nav_icon"/>
      <img src = {write} alt="nav_icon"/>
      <img src = {compass} alt="nav_icon"/>

      {like? <img className="nav_heart" src = {blackheart} alt="nav_icon" onClick={likeClickHandler}/> :
        <img className="nav_heart" src = {heart} alt="nav_icon" onClick={likeClickHandler} />}
      {like &&
      <div className="like_menu" ref={outsideRef}>
        <div className="like_cmt">
        <div className="like_today">오늘</div>
          <div className="like_oneCmt">
            <div><img className="nav_profile_img" src={profile}/></div>
            <div><a className="like_cmt_id">헹구</a>님이 회원님을 팔로우하기 시작했습니다.<a>3시간전</a>
              <div className="like_picture">a</div>
            </div>
          </div>
          <div className="like_oneCmt">
            <div><img className="nav_profile_img" src={profile}/></div>
            <div><a className="like_cmt_id">헹구</a>님이 회원님을 팔로우하기 시작했습니다.<a>3시간전</a>
              <div className="like_picture">a</div>
            </div>
          </div>
          <div className="like_oneCmt">
            <div><img className="nav_profile_img" src={profile}/></div>
            <div><a className="like_cmt_id">헹구</a>님이 회원님을 팔로우하기 시작했습니다.<a>3시간전</a>
              <div className="like_picture">a</div>
            </div>
          </div>
          <div className="like_oneCmt">
            <div><img className="nav_profile_img" src={profile}/></div>
            <div><a className="like_cmt_id">헹구</a>님이 회원님을 팔로우하기 시작했습니다.<a>3시간전</a>
              <div className="like_picture">a</div>
            </div>
          </div>
        </div>
      </div>
      }
      {myProfile? <img className="nav_profile" src = {test} alt="nav_icon" onClick={myProfileClickHandler}/>:
        <img src = {test} alt="nav_icon" onClick={myProfileClickHandler}/>}
      {myProfile &&
      <div className="myprofile">
        <div className="profile_menu">
        <div>aaaaa</div>
        </div>
      </div> }
    </>
  )
}

export default HeaderIcon;