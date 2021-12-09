

//포스트모달에 들어가는 포스트 카드

import none_profile from "../../../image/profile.png";
import React from "react";
import {useDispatch} from "react-redux";



const PostLikeCard = ({name, userId}) => {
  const dispatch = useDispatch();


  return (
    <>
      <div className="follow_Card">
        <div className="follow_info">
          <img src={none_profile} alt="profile_img"/>
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

export default PostLikeCard;