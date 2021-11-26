import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PostCard.scss";
import {
	post_heart,
	post_red_heart,
	message,
	text,
	dot,
	post_save,
	comment_heart,
	comment_red_heart,
} from "../../../common/IconImage";

import Profile_image from "../../../image/profile.jpg";
import Picture from "../../../image/picture.png";

import { modal_check } from "../../../redux/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "../PostModal/PostModal";
import PostComment from "./PostComment";
import dompurify from "dompurify";

const PostCard = ({ contents, createdAt, writer, postId }) => {
	const dispatch = useDispatch();

	const sanitizer = dompurify.sanitize;
	let html_content = contents.replace(/\n/g, "<br/>");
	let first_line = html_content.includes("<br/>");
	let first_content = html_content.split("<br/>");

	//댓글 좋아요
	const [commentLike, SetCommentLike] = useState(false);

	//포스트 좋아요
	const [postLike, SetPostLike] = useState(false);

	//게시글 더보기
	const [morePost, SetMorePost] = useState(false);

	const morePostClickHandler = () => {
		SetMorePost(!morePost);
	};
	const postLikeClickHandler = () => {
		SetPostLike(!postLike);
	};
	const commentLikeClickHandler = () => {
		SetCommentLike(!commentLike);
	};

	const show_postModal = () => {
		dispatch(modal_check());
	};

	//글쓴 시간 계산.
	function displayTime(value) {
		const today = new Date();
		const nowTime = new Date(value);

		const displayTime = Math.floor(
			(today.getTime() - nowTime.getTime()) / 1000 / 60,
		);
		if (displayTime < 1) return "방금전";
		if (displayTime < 60) {
			return `${displayTime}분전`;
		}

		const displayTimeHour = Math.floor(displayTime / 60);
		if (displayTimeHour < 24) {
			return `${displayTimeHour}시간전`;
		}

		const displayTimeDay = Math.floor(displayTime / 60 / 24);
		if (displayTimeDay < 365) {
			return `${displayTimeDay}일전`;
		}

		return `${Math.floor(displayTimeDay / 365)}년전`;
	}

	const time = displayTime(createdAt);

	return (
		<>
			<div className="post_cards">
				<div className="post_card">
					<div className="post_header">
						<div className="profile_img">
							<img className="post_user_image" src={Profile_image} />
							<div>{writer[0].userId}</div>

							<div className="profile_img_dot" onClick={show_postModal}>
								<img src={dot} />
							</div>
						</div>
						<div className="post_center">
							<img src={Picture} />
						</div>
						<div className="post_icon">
							<div className="footer_icon">
								{postLike ? (
									<img src={post_red_heart} onClick={postLikeClickHandler} />
								) : (
									<img src={post_heart} onClick={postLikeClickHandler} />
								)}
								<img src={text} />
								<img src={message} />
							</div>
							<div className="footer_collection">
								<img src={post_save} />
							</div>
						</div>
						<div className="post_content">
							<a className="post_user_id">좋아요 1,200개</a>
							<div className="post_text">
								<a className="post_user_id">{writer[0].userId}</a>
								{morePost ? (
									<div
										className="post_text"
										dangerouslySetInnerHTML={{
											__html: sanitizer(html_content),
										}}
									/>
								) : (
									<div className="post_text">
										{" "}
										{first_content[0]}
										{first_line && (
											<span
												className="more_contents"
												onClick={morePostClickHandler}
											>
												더 보기
											</span>
										)}
									</div>
								)}
							</div>
							<div>댓글 122개 모두 보기</div>
						</div>
						<div className="post_comment">
							<div className="post_one_comment">
								<a className="post_user_id"> hyemin085</a>
								<div>아ㅏㅏㅏㅏㅏㅏㅏㅏㅏ</div>
								{commentLike ? (
									<img
										src={comment_red_heart}
										onClick={commentLikeClickHandler}
									/>
								) : (
									<img src={comment_heart} onClick={commentLikeClickHandler} />
								)}
							</div>
							{/*<div className="post_one_comment"><a className="post_user_id"> poseson92</a><div>오우ㅜㅜㅜㅜㅜㅜㅜㅜ</div>*/}
							{/*  {commentLike? <img src={comment_red_heart} onClick={commentLikeClickHandler}/> :  <img src={comment_heart} onClick={commentLikeClickHandler}/>}*/}
							{/*</div>*/}
							<div className="post_time">{time}</div>
						</div>
						<PostComment postId={postId} />
					</div>
				</div>
			</div>
		</>
	);
};

export default PostCard;
