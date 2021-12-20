import {useDispatch, useSelector} from "react-redux";
import {likeList_modal} from "../../../redux/modal/modalSlice";
import {x_img} from "../../../common/IconImage";

import React, {useEffect} from "react";
import PostLikeCard from "./PostLikeCard";
import {getLikeList} from "../../../redux/post/post";

const PostLikeModal = ({ likeOpen, SetLikeOpen, postId}) => {
  const dispatch = useDispatch();

  const cancleClickHandler = () => {
    // dispatch(likeList_modal());
    SetLikeOpen(false);
  };

  useEffect(() => {
    dispatch(getLikeList({postId}));
  },[dispatch])
  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
  //   return () => {
  //     const scrollY = document.body.style.top
  //     document.body.style.cssText = `position: ""; top: "";`
  //     window.scrollTo(0, parseInt(scrollY || '0') * -1)
  //   }
  // }, [])

  const like_list = useSelector(state=>state.post.likeUsers);



  return (
    <>
      <div className="modal_common_container">

        <div className="modal_common_header">
          <span>좋아요</span><span> <img onClick={cancleClickHandler} src={x_img} alt="cancle"/></span>
        </div>

        <div className="modal_common_card">
          <div className="modal_content">
            {like_list && like_list.map((likes) => (
              <PostLikeCard
                userId={likes.userId}
                name={likes.name}
                profileImage={likes.profileImage}
                isFollow={likes.isFollow}/>
            ))}


        </div>
        </div>
      </div>
      <div className="overlay" onClick={cancleClickHandler}/>
    </>
  );
};

export default PostLikeModal;
