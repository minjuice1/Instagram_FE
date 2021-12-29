

//포스트모달에 들어가는 포스트 카드

import none_profile from "../../../image/profile.png";
import React from "react";



const PostLikeCard = ({name, userId, profileImage, isFollow}) => {


  return (
    <>
      <div className="follow_Card">
        <div className="follow_info">
          {profileImage?    <img src={profileImage} alt="profileImage"/> :  <img src={none_profile} alt="profile_img"/>}

          <div className="follow_user">
            <div>{userId}</div>
            <div>{name}</div>
          </div>
        </div>
        <div className="card_button">
          {isFollow?<button className="card_following_button_">팔로잉</button> : <button className="card_follow_button">팔로우</button> }
        </div>
      </div>

    </>
  )
}

export default PostLikeCard;