import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import {getPostDetail} from "../../../redux/post/post";
import PostDetailComment from './PostDetailComment';
import PostComment from '../PostCard/PostComment';

// modal
import { modal_check } from "../../../redux/modal/modalSlice";
import PostModal from "../PostModal/PostModal";
import {postDetail_modal} from "../../../redux/modal/modalSlice";

// css
import "./PostDetail.scss";
import pp from "../../../image/profile.jpg";
import { BiDotsHorizontalRounded, BiX } from "react-icons/bi";
import {heart, message, text, post_save, post_saveActive, comment_heart, comment_red_heart, menu_profile,} from "../../../common/IconImage";

const PostDetail = () => {	
	const {postId} = useParams();
	const dispatch = useDispatch();

	const is_modal = useSelector((state) => state.modal.is_modal);
	const postDetail = useSelector((state) => state.post.postDetail[0]);
	const comments = useSelector((state) => state.post.comment);
	// console.log(postDetail);
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
		dispatch(postDetail_modal());
	};

	return (
		<>
			{is_modal && <PostModal />}
			{postDetail && 
			<div className="postDetail_content_all">
				<div className="postDetail_exit"><BiX size={40} onClick={cancleClickHandler}/></div>
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
										<div className="postDetail_comment_list">
										{/* 댓글리스트 */}
												{comments && comments.map((comment) => (
													<PostDetailComment postId={postId} commentId={comment._id} contents = {comment.contents}
													writer={comment.writer} like={comment.like} date={comment.createdAt}/>
												))}
									</div>
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
		<div className="postDetail_overlay" onClick={cancleClickHandler}></div>
		</>
	);
};
export default PostDetail;
