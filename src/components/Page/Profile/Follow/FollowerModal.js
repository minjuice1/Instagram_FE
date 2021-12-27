// 팔로워 리스트 모달

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

import {followers_modal_check, modal_check} from "../../../../redux/modal/modalSlice";
import "./FollowModal.scss";
import FollowerCard from "../Follow/FollowerCard";
import {x_img} from "../../../../common/IconImage";
import {getFollower} from "../../../../redux/user/user";

const FollowerModal = () => {
	const dispatch = useDispatch();


	const cancleClickHandler = () => {
		dispatch(followers_modal_check());
	};

	const userId = useSelector(state => state.post.user[0]._id);

	useEffect(() => {
		dispatch(getFollower({
			Id: userId,
		}))
	},[dispatch])

	const info = useSelector(state=>state.user.FollowerList);



	const myInfoData = sessionStorage.getItem("info");
	const myInfo = JSON.parse(myInfoData);

	const myFollowers = userId === myInfo._id? true : false;

	return (
		<>
			<div className="modal_common_container">
				<div className="modal_common_header">
					<span>팔로워</span><span> <img onClick={cancleClickHandler} src={x_img} alt="cancle"/></span>
				</div>
				<div className="modal_common_card">
					{info&& info.map((info) => (
						<FollowerCard
						name = {info.name}
						userId={info.userId}
						profileImage={info.profileImage}
						isFollow = {info.isFollow}
						myId = {myInfo.userId}
						myFollowers={myFollowers}
						_id = {info._id}/>


					))}
				</div>
			</div>
			<div className="overlay" onClick={cancleClickHandler}/>
		</>
	);
};

export default FollowerModal;