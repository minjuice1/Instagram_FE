import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { similarAccount_modal_check} from "../../../../../redux/modal/modalSlice";
import "./CommonFollowingModal.scss";
import profile from "../../../../../image/profile.png";

const FollowersModal = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const cancleClickHandler = () => {
		dispatch(similarAccount_modal_check());
	};

	return (
		<>
			<div className="following_modal_container">
				<div className="following_modalBox">
					<div className="following_modal">
						<div className="following_header">
							<div>비슷한 계정</div>
							<button onClick={cancleClickHandler}>X</button>
						</div>
						<div className="following_category"/>
						<div className="following_listBox">
							<ul>
								<div>
									<li>
										<div className="following_pp">
											<img src={profile} alt="pp" />
										</div>
										<div className="following_userInfo">
											<div className="following_userId">testtest</div>
											<div className="following_status">상태메세지</div>
										</div>
										<button className="similarAccount_button">팔로우</button>
									</li>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="overlay" onClick={cancleClickHandler}/>
		</>
	);
};

export default FollowersModal;
