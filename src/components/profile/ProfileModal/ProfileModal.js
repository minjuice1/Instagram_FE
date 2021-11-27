import "./ProfileModal.scss";
import { useDispatch } from "react-redux";
import { modal_check } from "../../../redux/modal/modalSlice";

const ProfileModal = () => {
	const dispatch = useDispatch();

	const cancleClickHandler = () => {
		dispatch(modal_check());
	};

	return (
		<>
			<div className="profile_modal_container">
				<div className="profile_modal">
					<div>비밀번호 변경</div>
					<div>네임 태그</div>
					<div>앱 및 웹사이트</div>
					<div>알림</div>
					<div>개인정보 및 보안</div>
					<div>로그인 활동</div>
					<div>Instagram에서 보낸 이메일</div>
					<div>문제 신고</div>
					<div>로그아웃</div>
					<div onClick={cancleClickHandler}>취소</div>
				</div>
			</div>
			<div className="overlay" onClick={cancleClickHandler}></div>
		</>
	);
};

export default ProfileModal;
