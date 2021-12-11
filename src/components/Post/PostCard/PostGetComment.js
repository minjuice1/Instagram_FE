import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import {comment_heart, comment_red_heart} from "../../../common/IconImage";
import { likedComment } from '../../../redux/post/comment';

//postcard와 css공유함.
import "./PostCard";


const PostGetComment = ({contents, writer, postId, commentId}) => {
  const dispatch = useDispatch();

  //댓글 좋아요
  const [commentLike, SetCommentLike] = useState(false);

  // userId 추출
  const userId = writer[0] ?
    (writer[0].userId) :
    (writer.userId);


  // 댓글 좋아요
  const AccessToken = localStorage.getItem("user");
  const commentLikeClickHandler = () => {
    dispatch(
      likedComment({
        commentId,
        AccessToken,
      }));
  };

  return(
    <>
      <div className="post_comment">
        <div className="post_one_comment">
          <div> <a>{userId}</a>  <a>{contents}</a> </div>

          {commentLike ? (
              <img src={comment_red_heart} onClick={commentLikeClickHandler}/>) :
            (<img src={comment_heart} onClick={commentLikeClickHandler}/>)}
        </div>
        {/*<div className="post_one_comment"><a className="post_user_id"> poseson92</a><div>오우ㅜㅜㅜㅜㅜㅜㅜㅜ</div>*/}
        {/*  {commentLike? <img src={comment_red_heart} onClick={commentLikeClickHandler}/> :  <img src={comment_heart} onClick={commentLikeClickHandler}/>}*/}
        {/*</div>*/}

      </div>
    </>
  )
}

export default PostGetComment;