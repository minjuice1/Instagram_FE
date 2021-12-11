import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";

import {likeList_modal, modal_check} from "../../../redux/modal/modalSlice";
import {likePost, deletePost, savedPost} from "../../../redux/post/post";
import { replyReducer } from '../../../redux/post/postSlice';

import PostComment from "./PostComment";
import PostGetComment from "./PostGetComment";
import PostDetail from '../PostDetail/PostDetail';
import PostLikeModal from "../PostModal/PostLikeModal";

import "./PostCard.scss";
import {
  post_heart,
  post_red_heart,
  message,
  text,
  dot,
  post_save,
  post_saveActive,
  none_profile,
} from "../../../common/IconImage";
import dompurify from "dompurify";

const PostCard = ({contents, createdAt, writer, postId,
                    postImage, isLike, comments, commentIsAllowed, commentCount, isPostSaved}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 게시글에 \n으로 되어있는 부분을 html코드인 <br/>로 변경해서 줄바꿈 표시함.
  const sanitizer = dompurify.sanitize;
  let html_content = contents.replace(/\n/g, '<br/>');
  let first_line = html_content.includes("<br/>");
  let first_content = html_content.split("<br/>");

  //포스트 좋아요
  const likes = isLike
  const [postLike, SetPostLike] = useState(likes);

  const postLikeClickHandler = () => {
    SetPostLike(!postLike);
    dispatch(
      likePost({
        postId,
      }))
  };

  //포스트 북마크
  const AccessToken = localStorage.getItem("user");
  const savedPostHandler = () => {
    dispatch(
      savedPost({
        postId,
        AccessToken,
        isPostSaved,
      }));
  };
  
	//게시글 더보기
	const [morePost, SetMorePost] = useState(false);

	const morePostClickHandler = () => {
		SetMorePost(!morePost);
	};


  // 처음 홈화면에서는 댓글을 2개까지만 보여주기 때문에 댓글이 많을 경우 미리 잘라줌.
  const get_comments = comments.slice(0-2);

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

	const time = displayTime(createdAt);

  //모달 리덕스에서 관리
  const is_postDetailmodal = useSelector((state) => state.modal.postDetail_modal);
  const show_postModal = () => {
    dispatch(modal_check());
  };

  const deleteClickHandler = () => {
    dispatch(
     deletePost({
        postId,
      }))
  };

  // 답글 달기 취소
  useEffect(() => {
    dispatch(replyReducer(""))
  }, [])

  //유저 정보 프로필 클릭해서 들어가기
 const UserProfileClickHandler = () => {
   const id = writer[0].userId
   navigate(`/profile/${id}`,{state: id})}

  //등록한 프로필 사진이 있는 경우와 없는 경우 구분.
  const profile_img = writer[0].profileImage;
  const user_img = profile_img? profile_img : none_profile;


  //좋아요 리스트 모달
  const likeListClickHandler = () => {
      dispatch(likeList_modal(
        postId,
      ));

  }
  const post_like_list = useSelector(state=>state.modal.likeList_modal);


  return (
    <>
      {post_like_list && <PostLikeModal/>}
    {is_postDetailmodal && <PostDetail/>}
      <div className="post_cards">
        <div className="post_card">
          <div className="post_header">
            <div className="profile_img">
              <img className="post_user_image" src={user_img}/>
              <div className="post_user_id"  onClick={UserProfileClickHandler} >{writer[0].userId}</div>
              {/*임시 삭제버튼*/}
              <div onClick={deleteClickHandler}>삭제</div>
              <div className="profile_img_dot" onClick={show_postModal}>
               <img src={dot}/>
              </div>
            </div>
            <div className="post_center">
              <img className="post_center_image" src={postImage}/>
            </div>
            <div className="post_icon">
              <div className="footer_icon">
                {postLike ? (
                    <img src={post_red_heart} onClick={postLikeClickHandler}/>) :
                  (<img src={post_heart} onClick={postLikeClickHandler}/>)}
                <img src={text}/>
                <img src={message}/>
              </div>
              <div className="footer_collection">
              {isPostSaved ? (
											<img
												className="post_saveActive"
												src={post_saveActive}
												onClick={savedPostHandler}
												alt="post_save"
											/>
										) : (
											<img
												className="post_save"
												src={post_save}
												onClick={savedPostHandler}
												alt="post_save"
											/>
										)}
              </div>
            </div>
            <div className="post_content">
              <a className="post_user_id" onClick={likeListClickHandler}>좋아요 1,200개</a>
              <div className="post_text">
                <a className="post_user_id">{writer[0].userId}</a>
                {morePost ? (
                    <div
                      className="post_text"
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(html_content),
                      }}/>) :
                  (<div className="post_text">
                    {" "}
                    {first_content[0]}
                    {first_line && (
                      <span className="more_contents" onClick={morePostClickHandler}>더 보기</span>)}
                  </div>)}
              </div>
              <div>
                {commentCount > 2 && (
                  <Link to={`/postdetail/${postId}`} >
                  댓글 <span>{commentCount}</span>개 모두 보기
                </Link>
                )}
              </div>
            </div>
            {get_comments && get_comments.map((comment) => (
              <PostGetComment contents ={comment.contents}
                              postId={comment.postId}
                              writer={comment.writer}
                              commentId={comment._id}/>
             ))}
            <div className="post_time">{time}</div>
            {commentIsAllowed ? <PostComment postId={postId}/>:
              <div>이 게시물에 대한 댓글 기능이 제한되었습니다.</div>}

          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
