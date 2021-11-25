import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PostCard.scss";

import {
	heart,
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

const PostCard = ({ contents, createdAt, writer }) => {
	const dispatch = useDispatch();

	//댓글 좋아요
	const [commentLike, SetCommentLike] = useState(false);

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

	console.log(writer);

	const is_modal = useSelector((state) => state.modal.is_modal);
	return (
		<>
			{is_modal && <PostModal />}
			<div className="post_cards">
				<div className="post_card">
					<div className="post_header">
						<div className="profile_img">
							<img className="post_user_image" src={Profile_image} />
							<div>{writer.userId}</div>
							<div className="profile_img_dot" onClick={show_postModal}>
								<img src={dot} />
							</div>
						</div>
						<div className="post_center">
							<img src={Picture} />
						</div>
						<div className="post_icon">
							<div className="footer_icon">
								<img src={heart} />
								<img src={text} />
								<img src={message} />
							</div>
							<div className="footer_collection">
								<img src={post_save} />
							</div>
						</div>
						<div className="post_content">
							<a className="post_user_id">좋아요 1,200개</a>
							<div>
								<a className="post_user_id">{writer.userId}</a> {contents}{" "}
								<span>더보기</span>
							</div>
							<Link className="link" to="/postdetail">
								<div>댓글 122개 모두 보기</div>
							</Link>
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
						<PostComment />
					</div>
				</div>
			</div>
		</>
	);
};

export default PostCard;
