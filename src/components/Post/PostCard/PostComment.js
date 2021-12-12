import "../PostDetail/PostDetail.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {addComment, addReplyComment} from "../../../redux/post/comment";
import InputEmoji from "react-input-emoji";
import { replyReducer } from '../../../redux/post/postSlice';

const PostComment = (postId) => {
	const dispatch = useDispatch();

	

	const replyTag = useSelector((state) => state.post.replyTag); 
	const replyUserId = useSelector(state => state.post.replyTag?.writer);
	const replyCommentId = useSelector(state => state.post.replyTag?.commentId);

	const [postComment, SetPostComment] = useState("");
	const AccessToken = localStorage.getItem("user");
	const _postId = postId.postId;

	useEffect(() => {
		dispatch(replyReducer(""))
	}, []);

	useEffect(() => {
		if(replyUserId !== "" && replyUserId !== undefined){
			SetPostComment("※"+replyUserId+" ");
		}
	}, [replyTag])

	console.log(replyTag);
	console.log(replyUserId);

	// 댓글
	function CommentOnEnter(postComment) {
		dispatch(
			addComment({
				postId: _postId,
				contents: postComment,
				AccessToken,
			}),
			[dispatch],
		); 
	}

	const CommentClickHandler = (event) => {
		event.preventDefault();
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

	// function CommentOnEnter(postComment) {
	// 	dispatch( 
	// 		addComment({ 
	// 			postId: _postId, 
	// 			contents: postComment, 
	// 			AccessToken, 
	// 			path: { path }, 
	// 		}), 
	// 		[dispatch],
	// 			); 
	// 		} 
	// const CommentClickHandler = (event) => {
	// 		event.preventDefault(); 
	// 		dispatch( 
	// 			addComment({ 
	// 				postId: _postId, 
	// 				contents: postComment,
	// 				AccessToken, 
	// 				path: { path }, 
	// 			}), 
	// 			[dispatch] 
	// 			); 
	// 			SetPostComment(""); 
	// 		};

	// 대댓글

	function ReplyCommentOnEnter(postComment) {
		dispatch(
			addReplyComment({
				postId: _postId,
				commentId: replyCommentId,
				contents: postComment,
				AccessToken,
			}),
			[dispatch],
		); 
	}

	const ReplyCommentClickHandler = (event) => {
		event.preventDefault();
		dispatch(
			addReplyComment({
				postId: _postId,
				commentId: replyCommentId,
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
					{postComment.includes("※") ? (<InputEmoji
						borderColor="white"
						placeholder="댓글 달기..."
						fontSize="14"
						value={postComment}
						onChange={SetPostComment}
						cleanOnEnter
						onEnter={ReplyCommentOnEnter}
					/>):(<InputEmoji
						borderColor="white"
						placeholder="댓글 달기..."
						fontSize="14"
						value={postComment}
						onChange={SetPostComment}
						cleanOnEnter
						onEnter={CommentOnEnter}
					/>)}

					{postComment ? postComment.includes("※") ? 
					(<button className="postDetail_submit"
					onClick={ReplyCommentClickHandler} >
						게시
					</button>) : 
					(<button className="postDetail_submit"
					onClick={CommentClickHandler} >
						게시
					</button>) : 
					(<button className="postDetail_submitOff"
					disabled='disabled' >
						게시
					</button>)}
				</div>
			</form>
		</>
	);
};

export default PostComment;
