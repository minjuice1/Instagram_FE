import {React, useState} from "react";
import {followers_modal_check, following_modal_check} from "../../../../redux/modal/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import FollowModal from "./FollowModal";


const UserFollow= ({totalFollow, isFollowing}) => {
  const dispatch = useDispatch();

  const follow_modal = useSelector((state) => state.modal.following_modal);

  const show_follow_modal = () => {
    dispatch(following_modal_check());
  };



  return(
    <>
      {follow_modal && <FollowModal isFollowing={isFollowing}/>}
      <span
        onClick={show_follow_modal}
        className="otherProfile_followers_modal">
										팔로우 <span>{totalFollow}</span>
									</span>
    </>
  )
}

export default UserFollow;