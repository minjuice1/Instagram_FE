import {useDispatch, useSelector} from "react-redux";
import {x_img} from "../../../common/IconImage";
import React, {useEffect} from "react";
import PostLikeCard from "../PostModal/PostLikeCard";
import { getLikedListComment } from '../../../redux/post/comment';

const PostDetailLikeModal = ({SetLikeOpen, commentId, AccessToken}) => {

  const dispatch = useDispatch();

  const like_list = useSelector(state => state.post.likeUsersCmt);

  useEffect(() => {
    dispatch(getLikedListComment({commentId, AccessToken}));
  }, [dispatch])

  const cancleClickHandler = () => {
    SetLikeOpen(false);
  };

  // useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed; 
  //     top: -${window.scrollY}px;
  //     overflow-y: hidden;
  //     width: 99.23%;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = '';
  //     window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  //   };
  // }, []);

  return (
    <>
      <div className="modal_common_container">
        <div className="modal_common_header">
          <span>좋아요</span>
          <span> <img onClick={cancleClickHandler} src={x_img} alt="cancle"/> </span>
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

export default PostDetailLikeModal;
