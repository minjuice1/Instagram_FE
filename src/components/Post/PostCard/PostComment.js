import "./PostCard.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {comment} from "../../../redux/post/comment";
import InputEmoji from "react-input-emoji";

const PostComment = (postId) => {
	const dispatch = useDispatch();

	const [postComment, SetPostComment] = useState();

	const AccessToken = localStorage.getItem("user");
	const postId_ = postId.postId;

	function handleOnEnter(text) {
		dispatch(
			comment({
				postId: postId_,
				contents: postComment,
				AccessToken,
			}),
			[dispatch],
		);
	}

	const CommentClickHandler = () => {
		dispatch(
			comment({
				postId: postId_,
				contents: postComment,
				AccessToken,
			}),
			[dispatch],
		);
		SetPostComment("")
	};

	return (
		<>
			<form>
				<div className="post_cmt">
					<InputEmoji
						borderColor="white"
						placeholder="댓글 달기..."
						fontSize="14"
						value={postComment}
						onChange={SetPostComment}
						cleanOnEnter
						onEnter={handleOnEnter}
					/>
					<div className="comment_submit" onClick={CommentClickHandler}>
						게시
					</div>
				</div>
			</form>
		</>
	);
};

export default PostComment;
