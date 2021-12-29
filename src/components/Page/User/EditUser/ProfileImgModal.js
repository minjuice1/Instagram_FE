//프로필 이미지 변경 모달

import React from "react";
import {useDispatch} from "react-redux";
import "./ProfileModal.scss";
import ProfileChangeImage from "./ProfileChangeImage";
import {deleteProfileImg} from "../../../../redux/user/user";

const ProfileImgModal = ({imageChange, SetImageChange} ) => {
  const dispatch = useDispatch();


  const cancleClickHandler = () => {
    SetImageChange(false);
  };

  const deleteImgClickHandler = (event) => {
    event.preventDefault();
    dispatch(deleteProfileImg());
  }

  return(
    <>
      <div className="profile_img_modal">
        <div>프로필 사진 바꾸기</div>
        <div>
          <ProfileChangeImage/>
        </div>
        <div onClick={deleteImgClickHandler}>현재 사진 삭제</div>
        <div onClick={cancleClickHandler}>취소</div>

      </div>
      <div className="overlay" onClick={cancleClickHandler}/>
    </>
  )
}

export default ProfileImgModal