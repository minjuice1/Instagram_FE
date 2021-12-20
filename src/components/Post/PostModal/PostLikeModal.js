import {useDispatch, useSelector} from "react-redux";
import {likeList_modal} from "../../../redux/modal/modalSlice";
import {x_img} from "../../../common/IconImage";

import React, {useEffect} from "react";
import PostLikeCard from "./PostLikeCard";
import {getLikeList} from "../../../redux/post/post";

const PostLikeModal = ({postId}) => {
  const dispatch = useDispatch();

  const cancleClickHandler = () => {
    dispatch(likeList_modal());
  };

  useEffect(() => {
    dispatch(getLikeList({postId}));
    console.log("헴")
  },[dispatch])

  const like_user_list = useSelector(state=>state.post.likeUsers);



  return (
    <>
      <div className="modal_common_container">

        <div className="modal_common_header">
          <span>좋아요</span><span> <img onClick={cancleClickHandler} src={x_img} alt="cancle"/></span>
        </div>

        <div className="modal_common_card">
          <div className="modal_content">
            {like_user_list && like_user_list.map((likes) => (
              <PostLikeCard userId={likes.userId} name={likes.name} profileImage={likes.profileImage} isFollow={likes.isFollow}/>
            ))}


        </div>
        </div>
      </div>
      <div className="overlay" onClick={cancleClickHandler}/>
    </>
  );
};

export default PostLikeModal;
