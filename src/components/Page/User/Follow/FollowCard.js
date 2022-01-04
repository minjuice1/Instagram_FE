//팔로우 유저 하나하나 리스트에 보여줄 수 있게 카드로 만들어 줌.

import profile from "../../../../image/profile.png";
import React from "react";
import "./CardStyle.scss";
import FollowButton from "../../../../common/FollowButton";


const FollowCard = ({name, userId, profileImage, isFollow, _id, isFollowing}) => {

  console.log(isFollow);

  return (
    <>
      <div className="follow_Card">
        <div className="follow_info">
          {profileImage?  <img src={profileImage} alt="profile_img"/> :  <img src={profile} alt="profile_img"/> }

          <div className="follow_user">
            <div>{userId}</div>
            <div>{name}</div>
          </div>
        </div>
        <div className="card_button">
         <FollowButton isFollow={isFollow} _id={_id} isFollowing={isFollowing}/>
        </div>

      </div>

    </>
  )
}

export default FollowCard;