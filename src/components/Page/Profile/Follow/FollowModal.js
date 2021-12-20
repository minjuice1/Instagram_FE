// 팔로워 리스트 모달

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {following_modal_check} from "../../../../redux/modal/modalSlice";
import "./FollowModal.scss";

import {x_img} from "../../../../common/IconImage";
import FollowCard from "./FollowCard";
import {getFollow} from "../../../../redux/user/user";

const FollowerModal = () => {
  const dispatch = useDispatch();


  const cancleClickHandler = () => {
    dispatch(following_modal_check());
  };

  const userId = useSelector(state => state.post.user[0]._id);

  useEffect(() => {
    dispatch(getFollow({
      Id: userId,
    }))
  },[dispatch])
  //
  const FollowList = useSelector(state=>state.user.FollowList);




  return (
    <>
      <div className="modal_common_container">
        <div className="modal_common_header">
          <span>팔로우</span><span> <img onClick={cancleClickHandler} src={x_img} alt="cancle"/></span>
        </div>
        <div className="modal_common_card">
          {FollowList && FollowList.map((follow) => (
            <FollowCard
            name ={follow.name}
            userId={follow.userId}
            profileImage={follow.profileImage}
            isFollow={follow.isFollow}
            />
          ))}

        </div>
      </div>
      <div className="overlay" onClick={cancleClickHandler}/>
    </>
  );
};

export default FollowerModal;