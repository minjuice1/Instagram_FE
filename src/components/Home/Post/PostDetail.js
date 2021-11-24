import React from "react";
import "./PostDetail.scss";
import postImg from "../../../image/picture.png";
import pp from "../../../image/profile.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const PostDetail = () => {
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
										test_id * 팔로잉
									</div>
								</div>
								<div className="postDetail_header_btn">
									<BiDotsHorizontalRounded size={22} />
								</div>
							</div>
							<div className="postDetail_comment">
								<div className="postDetail_comment_listBox">
									{/* component로 뺄 예정 */}
									<ui className="postDetail_comment_list">
										<div className="postDetail_comment_list_mine"></div>
										<ui className="postDetail_comments">
											<div className="postDetail_comment_pp"></div>
											<div className="postDetail_comments_comment">
												<div className="postDetail_comment_userId"></div>
												<div className="postDetail_comment_info"></div>
											</div>
											<div className="postDetail_commentList_liked"></div>
										</ui>
									</ui>
								</div>
								<div className="postDetail_comment_funcs">
									<div className="postDetail_comment_Likefunc"></div>
									<div className="postDetail_comment_Commentfunc"></div>
									<div className="postDetail_comment_Replyfunc"></div>
									<div className="postDetail_comment_Bookmarkfunc"></div>
								</div>
								<div className="postDetail_comment_likeList">
									<div className="postDetail_likeList_pic"></div>
									<div className="postDetail_likeList_likeInfo"></div>
								</div>
								<div className="postDetail_comment_time">
									<span>6시간 전</span>
								</div>
								<div className="postDetail_comment_writeBox">
									<div className="postDetail_comment_write">
										<div className="postDetail_comment_writeEmoji"></div>
										<div className="postDetail_comment_writeInput"></div>
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
