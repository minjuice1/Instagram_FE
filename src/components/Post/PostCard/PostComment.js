import "../PostDetail/PostDetail.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {addComment} from "../../../redux/post/comment";
import InputEmoji from "react-input-emoji";

const PostComment = (postId) => {
	const dispatch = useDispatch();

	const comments = useSelector((state) => state.post.comment);

	const [postComment, SetPostComment] = useState();
	const AccessToken = localStorage.getItem("user");
	const _postId = postId.postId;

	function handleOnEnter(postComment) {
		dispatch(
			addComment({
				postId: _postId,
				contents: postComment,
				AccessToken,
			}),
			[dispatch],
		);
	}

	const CommentClickHandler = () => {
	dispatch(
		addComment({
			postId: _postId,
			contents: postComment,
			AccessToken,
		}),
			[dispatch],
		);

		SetPostComment("")
	};

	const ReplyCommentClickHandler = () => {
		dispatch(
			addComment({
				postId: _postId,
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
				<div className="postDetail_cmt">
					<InputEmoji
						borderColor="white"
						placeholder="댓글 달기..."
						fontSize="14"
						value={postComment}
						onChange={SetPostComment}
						cleanOnEnter
						onEnter={handleOnEnter}
					/>
					<div className="postDetail_submit" onClick={CommentClickHandler}>
						게시
					</div>
				</div>
			</form>
		</>
	);
};

export default PostComment;
