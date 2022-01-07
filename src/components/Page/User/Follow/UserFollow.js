import {React, useState} from "react";
import {followers_modal_check, following_modal_check} from "../../../../redux/modal/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import FollowModal from "./FollowModal";


const UserFollow = ({totalFollow, isFollowing}) => {
  const dispatch = useDispatch();

  const follow_modal = useSelector((state) => state.modal.following_modal);

  const show_follow_modal = () => {
    dispatch(following_modal_check());
  };


  return (
    <>
      {follow_modal && <FollowModal isFollowing={isFollowing}/>}
      <span
        onClick={show_follow_modal}
        className="otherProfile_followers_modal">
										팔로우 <span>{totalFollow}</span>
									</span>

      <div className="mobile_follower_modal" onClick={show_follow_modal}>
        팔로우
        <div>{totalFollow}</div>
      </div>
    </>
  )
}

export default UserFollow;