import "./PostCard.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { comment } from "../../../redux/comment/comment";

import InputEmoji from "react-input-emoji";
const PostComment = (postId) => {
	const dispatch = useDispatch();

	const [postComment, SetPostComment] = useState("");

	function handleOnEnter(text) {
		console.log("enter", text);
	}

	const onChangePostComment = (e) => {
		SetPostComment(e.target);
	};

	const CommentClickHandler = () => {
		dispatch(
			comment({
				postId,
				postComment,
			}),
			[dispatch],
		);
	};

	console.log(postId);
	console.log(postComment);

	return (
		<>
			<form>
				<div className="post_cmt">
					<InputEmoji
						borderColor="white"
						placeholder="댓글 달기.."
						// value={postComment}
						fontSize="14"
						onChange={onChangePostComment}
					></InputEmoji>
					<div className="comment_submit" onClick={CommentClickHandler}>
						게시
					</div>
				</div>
			</form>
		</>
	);
};

export default PostComment;
