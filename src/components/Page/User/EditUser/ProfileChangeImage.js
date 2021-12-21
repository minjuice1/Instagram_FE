import React, {useEffect, useState} from "react";
import {profileImg} from "../../../../redux/user/user";
import {useDispatch} from "react-redux";




//프로필 사진 변경하기 useEffect를 쓰기 때문에 컴포넌트 따로 빼주었음.
const ProfileChangeImage = () => {
  const dispatch = useDispatch();
  const [profileImage, SetProfileImage] = useState(null);

  const profileImageClickHandler = (event) => {
    SetProfileImage(event.target.files[0]);
  };


  useEffect(() => {
    if (profileImage !== null) {
      const formData = new FormData();
      formData.append("profileImage", profileImage);
      dispatch(
        profileImg({
          formData,
        }));

    }
  });
  return(
    <>
      <label>
        <input type="file"   style={{display:"none"}} onChange={profileImageClickHandler}/> 사진 업로드</label>
    </>
  )
}

export default ProfileChangeImage;