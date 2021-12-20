//팔로워 유저 하나하나 리스트에 보여줄 수 있게 카드로 만들어 줌.

import profile from "../../../../image/profile.jpg";
import React, {useEffect} from "react";
import "./CardStyle.scss";
import {useDispatch, useSelector} from "react-redux";
import {deleteOneFollower, getFollow} from "../../../../redux/user/user";


const FollowerCard = ({name, userId, profileImage, isFollow, myFollowers, _id}) => {
  const dispatch = useDispatch();

  console.log(myFollowers);

  const myFollowerDeleteClickHandler = () => {
    dispatch(deleteOneFollower({
    _id
    }))
  }

  return (
    <>
      <div className="follow_Card">
        <div className="follow_info">
          {profileImage ?  <img src={profileImage} alt="profile_img"/> :  <img src={profile} alt="profile_img"/>}
          <div className="follow_user">
          <div>{userId}</div>
          <div>{name}</div>
          </div>
        </div>
        {myFollowers?  <div className="card_button"><button onClick={myFollowerDeleteClickHandler}>삭제</button> </div> :  <div className="card_button">
          {isFollow?<button className="card_following_button_">팔로잉</button> : <button className="card_follow_button">팔로우</button> }


        </div>}


      </div>

    </>
  )
}

export default FollowerCard;