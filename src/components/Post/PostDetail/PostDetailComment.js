import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {comment_heart, comment_red_heart} from "../../../common/IconImage";
import { likedComment } from '../../../redux/post/comment';

// postDetail과 css공유
import pp from "../../../image/profile.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";

// modal
import PostDetailCommentModal from "./PostDetailCommentModal";
import { replyReducer } from '../../../redux/post/postSlice';
import PostReplyComment from './PostReplyComment';

const PostDetailComment = ({postId, commentId, contents, date, isLike, like, writer, childComments}) => {
  const dispatch = useDispatch();

  // modal
  const [openModal, setOpenModal] = useState(false); 
  const show_postModal = () => {
		setOpenModal(true);
	};

  // 댓글 좋아요
  const AccessToken = localStorage.getItem("user");
  const LikedCommentHandler = () => {
    dispatch(
      likedComment({
        commentId,
        AccessToken,
        isLike,
        like,
      }));
  };

  // 답글 달기
  
  const replyHandler = () => {
    const replyInfo = {writer: writer, commentId: commentId}
    dispatch(replyReducer(replyInfo));
  }

    // 대댓글
    const [clickReply, setClickReply] = useState(false);

    const ReplyClickHandler = () => {
      setClickReply(!clickReply);
    }
   

  return(
    <>
    {openModal && <PostDetailCommentModal setOpenModal={setOpenModal} contents={contents} postId={postId} commentId={commentId}/>}
    <div className="postDetail_comments">
    <div className="postDetail_comment_pp">
      <img src={pp} alt="pp" />
    </div>
    <div className="postDetail_comments_comment">
      <div className="postDetail_comment_userId">
        <span>{writer}</span>
        <span className="postDetail_comment_contents">
          {contents}
        </span>
      </div>
      <div className="postDetail_comment_info">
        <span>{date}</span>
        {isLike ? (
          <span>
          좋아요 <span>{(like.length)+1}</span>개
        </span>
        ) : (
          <span>
          좋아요 <span>{like.length}</span>개
        </span>
        )}
        <span onClick={replyHandler}>답글 달기</span>
        <span onClick={show_postModal}><BiDotsHorizontalRounded size={15} lineHeight={10}/></span>
      </div>
      {clickReply ?
    (<div>
      <div onClick={ReplyClickHandler} className="postDetail_replycomment"> ㅡ 답글 숨기기 </div>
      {childComments && childComments.map((reply) => (
      <PostReplyComment
      Recontents={reply.contents} RecreatedAt={reply.createdAt} Relike={reply.like}
       Rewriter={reply.writer.userId} ReCommentId={reply._id} postId={postId}
       />
      ))}
      </div>)
    : (<div  onClick={ReplyClickHandler}>
        <div className="postDetail_replycomment"> ㅡ 답글보기 (<span>{childComments.length}</span>개)
        </div>
      </div>)}
    </div>
    <div className="postDetail_commentList_liked">

      {isLike ? (
        <img
          src={comment_red_heart}
          onClick={LikedCommentHandler}
          alt="comment_red_heart"
        />
      ) : (
        <img
          src={comment_heart}
          onClick={LikedCommentHandler}
          alt="comment_heart"
        />
      )}
    </div>
    </div>
  </>
  )
}

export default PostDetailComment;