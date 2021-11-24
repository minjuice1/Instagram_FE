import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./PostDetail.scss";
import postImg from "../../../image/picture.png";
import pp from "../../../image/profile.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import InputEmoji from "react-input-emoji";
import {
	heart,
	message,
	text,
	post_save,
	comment_heart,
	comment_red_heart,
	menu_profile,
} from "../../../common/IconImage";

const PostDetail = () => {
	const dispatch = useDispatch();

	// 댓글 좋아요
	const [commentLike, SetCommentLike] = useState(false);

	const commentLikeClickHandler = () => {
		SetCommentLike(!commentLike);
	};

	return (
		<>
			<div className="postDetail_content_all">
				<div className="postDetail_content">
					<div className="postDetail_Box">
						<div className="postDetail_imgBox">
							<div className="postDetail_img">
								<img src={postImg} alt="postImg" />
							</div>
						</div>
						<div className="postDetail_commentBox">
							<div className="postDetail_header">
								<div className="postDetail_header_pic">
									<img src={pp} alt="pp" />
									<div className="postDetail_header_userId">
										<span>test_id</span> * <span> 팔로잉</span>
									</div>
								</div>
								<div className="postDetail_header_btn">
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
													<span>testtest</span>{" "}
													<span>
														안녕하세요 테스트입니다
														오예오예오예오예오예오예오예오예오예오예오예오예
													</span>
												</div>
												<div className="postDetail_comment_myTime">1일</div>
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
										<img src={heart} alt="heart" />
									</div>
									<div className="postDetail_comment_Commentfunc">
										<img src={text} alt="text" />
									</div>
									<div className="postDetail_comment_Replyfunc">
										<img src={message} alt="message" />
									</div>
									<div className="postDetail_comment_Bookmarkfunc">
										<img src={post_save} alt="post_save" />
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
									<span>6시간 전</span>
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
											<button>게시</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default PostDetail;
