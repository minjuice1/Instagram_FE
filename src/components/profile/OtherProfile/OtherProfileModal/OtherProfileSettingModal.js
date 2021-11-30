import "../../Myprofile/MyProfileModal/CommonProfileSettingModal.scss";
import { useDispatch } from "react-redux";
import { modal_check } from "../../../../redux/modal/modalSlice";

const OtherProfileSettingModal = () => {
	const dispatch = useDispatch();

	const cancleClickHandler = () => {
		dispatch(modal_check());
	};

	return (
		<>
			<div className="profile_modal_container">
				<div className="OtherProfile_setting_modal">
					<div>이 사용자 차단하기</div>
					<div>제한</div>
					<div>사용자 신고</div>
					<div onClick={cancleClickHandler}>취소</div>
				</div>
			</div>
			<div className="overlay" onClick={cancleClickHandler}></div>
		</>
	);
};

export default OtherProfileSettingModal;
