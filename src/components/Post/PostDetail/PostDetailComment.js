import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';

import { getLikedListComment, likedComment } from '../../../redux/post/comment';
import { replyReducer } from '../../../redux/post/postSlice';
import PostReplyComment from './PostReplyComment';

// postDetail과 css공유
import {none_profile} from "../../../common/IconImage";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {comment_heart, comment_red_heart} from "../../../common/IconImage";

// modal
import PostDetailCommentModal from "./PostDetailCommentModal";


const PostDetailComment = ({postId, commentId, contents, date, isLike, likeCount, writer, childComments, profileImage}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // modal
  const [openModal, setOpenModal] = useState(false); 
  const show_postModal = () => {
		setOpenModal(true);
	};

  // 댓글 좋아요
  const AccessToken = localStorage.getItem("user");
  const path = "detailCmt"
  const LikedCommentHandler = () => {
    dispatch(
      likedComment({
        commentId,
        AccessToken,
        path,
      }));
  };

  // 댓글 좋아요 누른 사람 목록 보기
  const LikedListCommentHandler = () => {
    dispatch(
      getLikedListComment({
        commentId,
        AccessToken,
      }));
  };

  // 답글 달기
  const replyHandler = (event) => {
    const replyInfo = {writer: writer, commentId: commentId}
    dispatch(replyReducer(replyInfo));
    
  }

  // 대댓글
  const [clickReply, setClickReply] = useState(false);
  const ReplyClickHandler = () => {
    setClickReply(!clickReply);
  }

   //유저 정보 프로필 클릭해서 들어가기
	const UserProfileClickHandler = () => {
		navigate(`/profile/${writer}`,{state: writer})
	}

  //등록한 프로필 사진이 있는 경우와 없는 경우 구분.
	const user_img = profileImage? profileImage : none_profile;

  //글쓴 시간 계산. ex) 방금전, 몇분전 으로 표시하기 위해 사용함.
  function displayTime(value) {
    const today = new Date();
    const nowTime = new Date(value);

		const displayTime = Math.floor(
			(today.getTime() - nowTime.getTime()) / 1000 / 60,
		);
		if (displayTime < 1) return "방금전";
		if (displayTime < 60) {
			return `${displayTime}분전`;
		}

    const displayTimeHour = Math.floor(displayTime / 60);
    if (displayTimeHour < 24) {
      return `${displayTimeHour}시간전`;
    }

		const displayTimeDay = Math.floor(displayTime / 60 / 24);
		if (displayTimeDay < 365) {
			return `${displayTimeDay}일전`;
		}

		return `${Math.floor(displayTimeDay / 365)}년전`;
	}

	const time = displayTime(date);

  // 삭제버튼 mouseOver 
  const [showModal, setShowModal] = useState(false)
  const handleMouseEnter = e => {
    setShowModal(true)
  }
  const handleMouseLeave = e => {
    setShowModal(false)
  }


  return(
    <>
    {openModal && <PostDetailCommentModal setOpenModal={setOpenModal} contents={contents} postId={postId} commentId={commentId}/>}
    
    <div className="postDetail_comments" onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}>
    <div className="postDetail_comment_pp">
      <img src={user_img}/>
    </div>
    <div className="postDetail_comments_comment">
      <div>
      <div className="postDetail_comment_userId">
        <span onClick={UserProfileClickHandler}>{writer}</span>
        <span className="postDetail_comment_contents">
          {contents}
        </span>
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
      <div className="postDetail_comment_info">
        <span>{time}</span>
        {isLike ? (
          <span onClick={LikedListCommentHandler}>
          좋아요 <span>{likeCount}</span>개
          </span>
        ) : (
          <span onClick={LikedListCommentHandler}>
          좋아요 <span>{likeCount}</span>개
          </span>
        )}
        <span onClick={replyHandler}>답글 달기</span>
        {showModal && <span className="postDetail_comment_info_modal" onClick={show_postModal}><BiDotsHorizontalRounded size={15}/></span>}
          
      </div>
      {clickReply ?
      (<div className="postDetail_replyCommentsBox">
        <div className="postDetail_replycomment_hidden">
          <span  onClick={ReplyClickHandler}> ㅡㅡ 답글 숨기기 </span>
        {childComments && childComments.map((reply, idx) => (
        <PostReplyComment key={idx}
        Recontents={reply.contents} RecreatedAt={reply.createdAt} Relike={reply.likeCount} ReIsLike={reply.isLike}
        Rewriter={reply.writer.userId} ReCommentId={reply._id} postId={postId} Id={commentId} ReprofileImage={reply.writer.profileImage}
        />
      ))}
      </div>
      </div>)
    : (<div  onClick={ReplyClickHandler}>
        {childComments && childComments.length > 0 ? 
        (<div className="postDetail_replycomment"> ㅡㅡ 답글보기 (<span>{childComments.length}</span>개)</div>)
      : (<div className="postDetail_replycomment"></div>) }
      </div>)}
    </div>
    
    </div>
  </>
  )
}

export default PostDetailComment;