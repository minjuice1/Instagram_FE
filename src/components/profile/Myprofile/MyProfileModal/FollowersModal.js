import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { followers_modal_check } from "../../../../redux/modal/modalSlice";
import "./FollowingModal.scss";

const ProfileModal = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const cancleClickHandler = () => {
		dispatch(followers_modal_check());
	};

	return (
		<>
			<div className="following_modal_container">
				<div className="following_modalBox">
					<div className="following_modal">
						<div className="following_header">
							<div>팔로워</div>
							<button onClick={cancleClickHandler}>X</button>
						</div>
						<div className="following_category"></div>
						<div className="following_listBox">
							<ul>
								<div>
									<li>
										<div className="following_pp"></div>
										<div className="following_userInfo">
											<div className="following_userId">testtest</div>
											<div className="following_status">상태메세지</div>
										</div>
										<button className="following_button">삭제</button>
									</li>
									<li>
										<div className="following_pp"></div>
										<div className="following_userInfo">
											<div className="following_userId">testtest</div>
											<div className="following_status">상태메세지</div>
										</div>
										<button className="following_button">삭제</button>
									</li>
									<li>
										<div className="following_pp"></div>
										<div className="following_userInfo">
											<div className="following_userId">testtest</div>
											<div className="following_status">상태메세지</div>
										</div>
										<button className="following_button">삭제</button>
									</li>
									<li>
										<div className="following_pp"></div>
										<div className="following_userInfo">
											<div className="following_userId">testtest</div>
											<div className="following_status">상태메세지</div>
										</div>
										<button className="following_button">삭제</button>
									</li>
									<li>
										<div className="following_pp"></div>
										<div className="following_userInfo">
											<div className="following_userId">testtest</div>
											<div className="following_status">상태메세지</div>
										</div>
										<button className="following_button">삭제</button>
									</li>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="overlay" onClick={cancleClickHandler}></div>
		</>
	);
};

export default ProfileModal;
