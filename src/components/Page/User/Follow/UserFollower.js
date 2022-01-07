import {React, useState} from "react";
import {followers_modal_check} from "../../../../redux/modal/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import FollowerModal from "./FollowerModal";


const UserFollower = ({totalFollower}) => {
  const dispatch = useDispatch();
  const followers_modal = useSelector((state) => state.modal.followers_modal);

  const show_followers_modal = () => {
    dispatch(followers_modal_check());
  };


  return(
    <>

        {followers_modal && <FollowerModal/>}

         <span
           onClick={show_followers_modal}
           className="otherProfile_followers_modal">
										팔로워 <span>{totalFollower}</span>
									</span>

      <div className="mobile_follower_modal" onClick={show_followers_modal}>
										팔로워
        <div>{totalFollower}</div>
									</div>
    </>
  )
}

export default UserFollower;