import {useDispatch, useSelector} from "react-redux";
import {likeList_modal, modal_check} from "../../../redux/modal/modalSlice";
import {x_img} from "../../../common/IconImage";

import React, {useEffect} from "react";
import PostLikeCard from "./PostLikeCard";
import {getLikeList} from "../../../redux/post/post";

const PostLikeModal = () => {
  const dispatch = useDispatch();

  const cancleClickHandler = () => {
    dispatch(likeList_modal());
  };

  useEffect(() => {
    dispatch(getLikeList());
  })


  return (
    <>
      <div className="modal_common_container">

        <div className="modal_common_header">
          <span>좋아요</span><span> <img onClick={cancleClickHandler} src={x_img} alt="cancle"/></span>
        </div>

        <div className="modal_common_card">
          <div className="modal_content">
          <PostLikeCard/>

        </div>
        </div>
      </div>
      <div className="overlay" onClick={cancleClickHandler}/>
    </>
  );
};

export default PostLikeModal;
