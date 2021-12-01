import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { modal_check } from "../../../redux/modal/modalSlice";

import {addComment} from "../../../redux/post/comment";
import {getPostDetail} from "../../../redux/post/post";
import PostModal from "../PostModal/PostModal";
import "./PostDetail.scss";
import detailpicture from "../../../image/detailpicture.png";
import pp from "../../../image/profile.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import InputEmoji from "react-input-emoji";
import {heart, message, text, post_save, post_saveActive, comment_heart, comment_red_heart, menu_profile,} from "../../../common/IconImage";
import PostDetailComment from './PostDetailComment';
import PostComment from '../PostCard/PostComment';

const PostDetail = () => {	
	const {postId} = useParams();
	const dispatch = useDispatch();

	const AccessToken = localStorage.getItem("user");
	const is_modal = useSelector((state) => state.modal.is_modal);
	const postDetail = useSelector((state) => state.post.postDetail[0]);
	const comments = useSelector((state) => state.post.comment);

	useEffect(() => {
    dispatch(getPostDetail(postId));
  }, [getPostDetail]);

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
													<span>{postDetail.writer[0].userId}</span>{" "}
													<span>
														{postDetail.contents}
													</span>
												</div>
												<div className="postDetail_comment_myTime">{postDetail.createdAt}</div>
											</div>
										</div>
										{/* component로 뺄 예정 */}
										<ui className="postDetail_comments">
											<div className="postDetail_comment_pp">
												<img src={pp} alt="pp" />
											</div>
											<div className="postDetail_comments_comment">
												{comments && comments.map((comment) => (
													<PostDetailComment contents = {comment.contents}
													writer={comment.writer} like={comment.like} date={comment.createdAt}/>
												))}
												
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
									<span>{postDetail.createdAt}</span>
								</div>
									<PostComment postId={postId}/>
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
