

//포스트모달에 들어가는 포스트 카드

import none_profile from "../../../image/profile.png";
import React from "react";



const PostLikeCard = ({name, userId, profileImage, isFollow}) => {
  console.log(name, userId, profileImage, isFollow)

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
        {isFollow? <div className="follow_delete_button">
          <button>팔로잉</button>
        </div> :  <div className="follow_delete_button">
          <button>팔로우</button>
        </div> }
       

      </div>

    </>
  )
}

export default PostLikeCard;