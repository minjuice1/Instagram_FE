import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import {getPostDetail} from "../../../redux/post/post";
import PostDetailComment from './PostDetailComment';
import PostComment from '../PostCard/PostComment';
import {formatDistance} from 'date-fns';

// modal
import { modal_check } from "../../../redux/modal/modalSlice";
import PostModal from "../PostModal/PostModal";

// css
import "./PostDetail.scss";
import pp from "../../../image/profile.jpg";
import { BiDotsHorizontalRounded, BiX } from "react-icons/bi";
import {heart, message, text, post_save, post_saveActive, comment_heart, comment_red_heart, menu_profile,} from "../../../common/IconImage";
import { history } from '../../../history';

const PostDetail = () => {	

	const dispatch = useDispatch();
	const {postId} = useParams();

	const is_modal = useSelector((state) => state.modal.is_modal);
	const postDetail = useSelector((state) => state.post.postDetail[0]);
	const comments = useSelector((state) => state.post.comment);
	console.log(comments);

	useEffect(() => {
    dispatch(getPostDetail(postId));
  }, [getPostDetail]);

	// 포스트 좋아요
	const [postLike, SetPostLike] = useState(false);

	const postLikeClickHandler = () => {
		SetPostLike(!postLike);
	};

	// 북마크
	const [postBookmark, SetPostBookmark] = useState(false);

	const postBookmarkClickHandler = () => {
		SetPostBookmark((postBookmark) => !postBookmark);
	};

	// modal
	const show_postModal = () => {
		dispatch(modal_check());
	};

	const cancleClickHandler = () => {
		history.go(-1);
	};

	
    //글쓴 시간 계산. ex) 방금전, 몇분전 으로 표시하기 위해 사용함.
    function displayTime(value) {
      const today = new Date();
      const nowTime = new Date(value);
  
      const displayTime = Math.floor(
        (today.getTime() - nowTime.getTime()) / 1000 / 60,
      );
      if (displayTime < 1) return "방금 전";
      if (displayTime < 60) {
        return `${displayTime}분전`;
      }
  
      const displayTimeHour = Math.floor(displayTime / 60);
      if (displayTimeHour < 24) {
        return `${displayTimeHour}시간 전`;
      }
  
      const displayTimeDay = Math.floor(displayTime / 60 / 24);
      if (displayTimeDay < 365) {
        return `${displayTimeDay}일 전`;
      }
      return `${Math.floor(displayTimeDay / 365)}년 전`;
    }
  
    // const time = displayTime(postDetail.createdAt);

		

	return (
		<>
			{is_modal && <PostModal />}
			{postDetail && comments &&
			<div className="postDetail_background">
				<div className="postDetail_overlay" onClick={cancleClickHandler}/>
				<div className="postDetail_exit"><BiX size={40} onClick={cancleClickHandler}/></div>
				<div className="postDetail_container">
					<div className="postDetail_leftsideBox">
						<img src={postDetail.imageUrl} alt="postImg" />
					</div>
					<div className="postDetail_rightsideBox">
						<div className="postDetail_header">
							<div className="postDetail_header_pic">
									<img src={pp} alt="pp" />
							</div>
							<div className="postDetail_header_userId">
								<span>{postDetail.writer.userId}</span> * <span> 팔로잉</span>
							</div>
							<div className="postDetail_header_btn" onClick={show_postModal}>
								<BiDotsHorizontalRounded size={25} />
							</div>
						</div>
						{/* main */}
						<div className="postDetail_main">						
							<div className="postDetail_comment_list">
							{/* 댓글리스트 */}
								<div className="postDetail_comments">
									<div className="postDetail_comment_pp">
										<img src={pp} alt="pp" />
									</div>
									<div className="postDetail_comments_comment">
										<div className="postDetail_comment_userId">
											<span>{postDetail.writer.userId}</span>
											<span className="postDetail_comment_contents">
												{postDetail.contents}
											</span>
										</div>
										<div className="postDetail_comment_info">
											<span>{postDetail.createdAt}</span>
										</div>
									</div>
								</div>
									{comments && comments.map((comment) => (
										<PostDetailComment postId={postId} commentId={comment._id} contents = {comment.contents}
										writer={comment.writer.userId} isLike={comment.isLike} like={comment.like} date={comment.createdAt}
										childComments={comment.childComments}
										/>
									))}
							</div>
						
						{/* bottom */}
							<div className="postDetail_bottom">
								<div className="postDetail_comment_funcs">
									<div className="postDetail_comment_Likefunc">
										{postLike ? (
											<img
												src={heart}
												onClick={postLikeClickHandler}
												alt="heart"
											/>
										) : (
											<img
												src={heart}
												onClick={postLikeClickHandler}
												alt="heart"
											/>
										)}
									</div>
									<div className="postDetail_comment_Commentfunc">
										<img src={text} alt="text" />
									</div>
									<div className="postDetail_comment_Replyfunc">
										<img src={message} alt="message" />
									</div>
									<div className="postDetail_comment_Bookmarkfunc">
										{postBookmark ? (
											<img
												className="post_saveActive"
												src={post_saveActive}
												onClick={postBookmarkClickHandler}
												alt="post_save"
											/>
										) : (
											<img
												className="post_save"
												src={post_save}
												onClick={postBookmarkClickHandler}
												alt="post_save"
											/>
										)}
									</div>
								</div>
								<div className="postDetail_comment_likeList">
									<div className="postDetail_likeList_pic">
										<img src={menu_profile} alt="menu_profile" />
									</div>
									<div className="postDetail_likeList_likeInfo">
										<span>testtest</span>님 <span>외 60,000명</span>이
										좋아합니다
									</div>
								</div>
								<div className="postDetail_comment_time">
									<span>{postDetail.createdAt}</span>
								</div>
								<PostComment postId={postId} commentId={comments._id}/>
							</div>
						</div>
					</div>
					</div>
				</div>
		}	
		</>
	);
};
export default PostDetail;