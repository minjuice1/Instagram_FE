//팔로워 유저 하나하나 리스트에 보여줄 수 있게 카드로 만들어 줌.

import profile from "../../../../image/profile.jpg";
import React, {useEffect} from "react";
import "./CardStyle.scss";
import {useDispatch, useSelector} from "react-redux";
import {getFollow} from "../../../../redux/user/user";


const FollowerCard = ({name, userId}) => {
  const dispatch = useDispatch();


  return (
    <>
      <div className="follow_Card">
        <div className="follow_info">
          <img src={profile} alt="profile_img"/>
          <div className="follow_user">
          <div>{userId}</div>
          <div>{name}</div>
          </div>
        </div>

        <div className="follow_delete_button">
          <button>삭제</button>
        </div>

      </div>

    </>
  )
}

export default FollowerCard;