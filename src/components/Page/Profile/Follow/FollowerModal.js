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


	return (
		<>
			<div className="follow_container">
				<div className="follow_modal_header">
					<span>팔로워</span><span> <img onClick={cancleClickHandler} src={x_img} alt="cancle"/></span>
				</div>
				<div className="follow_modal_card">
					{info&& info.map((info) => (
						<FollowerCard
						name = {info.name}
						userId={info.userId}/>
					))}
				</div>
			</div>
			<div className="overlay" onClick={cancleClickHandler}/>
		</>
	);
};

export default FollowerModal;