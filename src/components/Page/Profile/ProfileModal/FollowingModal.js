import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {following_modal_check} from "../../../../redux/modal/modalSlice";
import "./CommonFollowingModal.scss";
import profile from "../../../../image/profile.jpg";

const FollowingModal = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [following, setFollowing] = useState(true);
	const [hashtag, setHashtag] = useState(false);

	const cancleClickHandler = () => {
		dispatch(following_modal_check());
	};

	const followingClickHandler = () => {
		setFollowing(true);
		setHashtag(!hashtag);
		// navigate("/profile/following");
	};

	const hashtagClickHandler = () => {
		setHashtag(true);
		setFollowing(!following);
		// navigate("/profile/hashtag_following");
	};

	return (
		<>
			<div className="following_modal_container">
			{/*	<div className="following_modalBox">*/}
			{/*		<div className="following_modal">*/}
			{/*			<div className="following_header">*/}
			{/*				<div>팔로잉</div>*/}
			{/*				<button onClick={cancleClickHandler}>X</button>*/}
			{/*			</div>*/}
			{/*			<div className="following_category">*/}
			{/*				{following ? (*/}
			{/*					<div*/}
			{/*						value={following}*/}
			{/*						className="following_clicked"*/}
			{/*						onClick={followingClickHandler}*/}
			{/*					>*/}
			{/*						사람*/}
			{/*					</div>*/}
			{/*				) : (*/}
			{/*					<div value={following} onClick={followingClickHandler}>*/}
			{/*						사람*/}
			{/*					</div>*/}
			{/*				)}*/}
			{/*				{hashtag ? (*/}
			{/*					<div*/}
			{/*						value={following}*/}
			{/*						className="following_clicked"*/}
			{/*						onClick={hashtagClickHandler}*/}
			{/*					>*/}
			{/*						해시태그*/}
			{/*					</div>*/}
			{/*				) : (*/}
			{/*					<div value={following} onClick={hashtagClickHandler}>*/}
			{/*						해시태그*/}
			{/*					</div>*/}
			{/*				)}*/}
			{/*			</div>*/}
			{/*			<div className="following_listBox">*/}
			{/*				<ul>*/}
			{/*					<div>*/}
			{/*						<li>*/}
			{/*							<div className="following_pp">*/}
			{/*								<img src={profile} alt="pp"></img>*/}
			{/*								<div className="commonProfile_modal"></div>*/}
			{/*							</div>*/}
			{/*							<div className="following_userInfo">*/}
			{/*								<div className="following_userId">testtest</div>*/}
			{/*								<div className="following_status">상태메세지</div>*/}
			{/*							</div>*/}
			{/*							<button className="following_button">팔로잉</button>*/}
			{/*						</li>*/}
			{/*					</div>*/}
			{/*				</ul>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
			</div>
			<div className="overlay" onClick={cancleClickHandler}></div>
		</>
	);
};

export default FollowingModal;
