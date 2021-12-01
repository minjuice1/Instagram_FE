import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { modal_check } from "../../redux/modal/modalSlice";

import {addComment} from "../../redux/post/comment";
import {getPostDetail} from "../../redux/post/post";
import PostModal from "./PostModal/PostModal";
import "./PostDetail.scss";
import detailpicture from "../../image/detailpicture.png";
import pp from "../../image/profile.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import InputEmoji from "react-input-emoji";
import {heart, message, text, post_save, post_saveActive, comment_heart, comment_red_heart, menu_profile,} from "../../common/IconImage";

const PostDetail = () => {	
	const {postId} = useParams();
	const dispatch = useDispatch();

	const AccessToken = localStorage.getItem("user");
	const is_modal = useSelector((state) => state.modal.is_modal);
	const postDetail = useSelector((state) => state.post.postDetail[0]);
	const postDetail_ = useSelector((state) => state.post.postDetail);
	// const writer = postDetail.writer[0];

	useEffect(() => {
    dispatch(getPostDetail(postId));
  }, [getPostDetail]);

	
	console.log(postDetail_);
	console.log(postDetail);
	// console.log(postDetail.writer[0].userId);

	const CommentClickHandler = () => {
		dispatch(
			addComment({
				postId: postId,
				contents: postDetail.contents,
				AccessToken,
			}),
			[dispatch],
		);
	};

	// 댓글 좋아요
	const [commentLike, SetCommentLike] = useState(false);

	const commentLikeClickHandler = () => {
		SetCommentLike(!commentLike);
	};

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

	const show_postModal = () => {
		dispatch(modal_check());
	};

	return (
		<>
			{is_modal && <PostModal />}
			{postDetail && 
			<div className="postDetail_content_all">
				<div className="postDetail_content">
					<div className="postDetail_Box">
						<div className="postDetail_imgBox">
							<div className="postDetail_img">
								<img src={postDetail.imageUrl} alt="postImg" />
							</div>
						</div>
						<div className="postDetail_commentBox">
							<div className="postDetail_header">
								<div className="postDetail_header_pic">
									<img src={pp} alt="pp" />
									<div className="postDetail_header_userId">
										<span>{postDetail.writer[0].userId}</span> * <span> 팔로잉</span>
									</div>
								</div>
								<div className="postDetail_header_btn" onClick={show_postModal}>
									<BiDotsHorizontalRounded size={25} />
								</div>
							</div>
							<div className="postDetail_comment">
								<div className="postDetail_comment_listBox">
									<ui className="postDetail_comment_list">
										<div className="postDetail_comment_list_mine">
											<div className="postDetail_comment_myPP">
												<img src={pp} alt="pp" />
											</div>
											<div className="postDetail_comment_mycommentBox">
												<div className="postDetail_comment_mycomment">
													<span>ss</span>{" "}
													<span>
														{/* {postDetail.contents} */}
													</span>
												</div>
												<div className="postDetail_comment_myTime">ss</div>
											</div>
										</div>
										{/* component로 뺄 예정 */}
										<ui className="postDetail_comments">
											<div className="postDetail_comment_pp">
												<img src={pp} alt="pp" />
											</div>
											<div className="postDetail_comments_comment">
												<div className="postDetail_comment_userId">
													<span>testtest</span>
													<span>
														안녕하세요 테스트입니다안녕하세요
														테스트입니다안녕하세요 테스트입니다안녕하세요
														테스트입니다안녕하세요 테스트입니다안녕하세요
														테스트입니다안녕하세요 테스트입니다안녕하세요
														테스트입니다안녕하세요 테스트입니다
													</span>
												</div>
												<div className="postDetail_comment_info">
													<span>2일</span>
													<span>
														좋아요 <span>5</span>개
													</span>
													<span>답글 달기</span>
												</div>
											</div>

											<div className="postDetail_commentList_liked">
												{commentLike ? (
													<img
														src={comment_red_heart}
														onClick={commentLikeClickHandler}
														alt="comment_red_heart"
													/>
												) : (
													<img
														src={comment_heart}
														onClick={commentLikeClickHandler}
														alt="comment_heart"
													/>
												)}
											</div>
										</ui>
									</ui>
								</div>
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
									<span>ss</span>
								</div>
								<div className="postDetail_comment_writeBox">
									<div className="postDetail_comment_write">
										<div className="postDetail_comment_writeInput">
											<InputEmoji
												borderColor="#ffffff"
												placeholder="댓글 달기.."
												fontSize="14"
											></InputEmoji>
										</div>
										<div className="postDetail_comment_writeBtn">
											<button onClick={CommentClickHandler}>게시</button>
										</div>
									</div>
								</div>
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
