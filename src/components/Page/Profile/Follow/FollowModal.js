// 팔로워 리스트 모달

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {following_modal_check} from "../../../../redux/modal/modalSlice";
import "./FollowModal.scss";

import {x_img} from "../../../../common/IconImage";
import FollowCard from "./FollowCard";

const FollowerModal = () => {
  const dispatch = useDispatch();


  const cancleClickHandler = () => {
    dispatch(following_modal_check());
  };

  // const userId = useSelector(state => state.post.user[0]._id);

  useEffect(() => {
    // dispatch(getFollow({
    //   Id: userId,
    // }))
  },[dispatch])
  //
  // const info = useSelector(state=>state.user.FollowerList);



  return (
    <>
      <div className="follow_container">
        <div className="follow_modal_header">
          <span>팔로우</span><span> <img onClick={cancleClickHandler} src={x_img} alt="cancle"/></span>
        </div>
        <div className="follow_modal_card">
          <FollowCard/>
        </div>
      </div>
    </>
  );
};

export default FollowerModal;