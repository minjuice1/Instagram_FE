import React, {useMemo, useRef, useState} from "react";
import "./EditUser.scss";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, editProfile, getProfile} from "../../../../redux/user/user";
import profile_img from "../../../../image/profile.jpg";
import {modal_check} from "../../../../redux/modal/modalSlice";
import ProfileImgModal from "./ProfileImgModal";

const EditProfile = () => {
  const dispatch = useDispatch();

  //프로필 정보수정
  const result = useMemo(() => sessionStorage.getItem("info"), []);

  const my_info = JSON.parse(result);

  const onChangeUserName = (e) => {
    SetUserName(e.target.value);
  };
  const onChangeUserId = (e) => {
    SetUserId(e.target.value);
  };
  const onChangeUserWebSite = (e) => {
    SetUserWebSite(e.target.value);
  };
  const onChangeUserIntroduce = (e) => {
    SetUserIntroduce(e.target.value);
  };
  const onChangeUserEmail = (e) => {
    SetUserEmail(e.target.value);
  };
  const onChangeUserNumber = (e) => {
    SetUserNumber(e.target.value);
  };
  const onChangeUserGender = (e) => {
    SetUserGender(e.target.value);
  };

  const [userName, SetUserName] = useState(my_info.name);
  const [userId, SetUserId] = useState(my_info.userId);
  const [userWebSite, SetUserWebSite] = useState(my_info.website);
  const [userIntroduce, SetUserIntroduce] = useState(my_info.introdution);
  const [userEmail, SetUserEmail] = useState(my_info.email);
  const [userNumber, SetUserNumber] = useState(my_info.phoneNum);
  const [userGender, SetUserGender] = useState(my_info.gender);


  const EditClickHandler = () => {
    dispatch(
      editProfile({
        userName,
        userId,
        userWebSite,
        userIntroduce,
        userEmail,
        userNumber,
        userGender,
      }),
      [dispatch],
    )
  }

  //프로필 사진바꾸기 모달
  const imgChangeClickHandler = () => {
    dispatch(modal_check());
  }
  const is_modal = useSelector(state => state.modal.is_modal);
  const profile_image = useSelector(state => state.user.user.profileImage);

  const deleteUserClickHandler = () => {
    dispatch(deleteUser());
  }


  return (
    <>
      {is_modal && <ProfileImgModal userId={userId}/>}

      <div className="edit_form">
        <div className="edit_forms">
          <div className="edit_user_info" onClick={imgChangeClickHandler}>
            {profile_image ? <img src={profile_image} alt={profile_img}/> : <img src={profile_img} alt={profile_img}/>}

          </div>
          <div className="editName">이름</div>
          <div className="edituserId">사용자이름</div>
          <div className="editWebSite">웹사이트</div>
          <div className="editIntroduce">소개</div>
          <div className="editEmail">이메일</div>
          <div className="editNumber">전화번호</div>
          <div className="editGender">성별</div>
        </div>
        <div className="edit_forms">
          <div className="edit_user_info">
            <div>{my_info.userId}</div>
            <div onClick={imgChangeClickHandler}>프로필 사진 바꾸기</div>
          </div>
          <div className="editName">
            <label><input className="editInput" value={userName} onChange={onChangeUserName}/></label>
            <div className="edit_text">사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.
              <br/><br/>이름은 14일 안에 두 번만 변경할 수 있습니다.
            </div>
          </div>
          <div className="edituserId">
            <label> <input className="editInput" value={userId} onChange={onChangeUserId}/></label>
            <div className="edit_text">대부분의 경우 14일 이내에 사용자 이름을 다시 {userId}(으)로 변경할 수 있습니다. <a>더 알아보기</a></div>
          </div>
          <div className="editWebSite">
            <label><input className="editInput" value={userWebSite} onChange={onChangeUserWebSite}/></label>
          </div>
          <div className="editIntroduce">
            <label><textarea className="editInput" value={userIntroduce} onChange={onChangeUserIntroduce}/></label>
            <div className="edit_text"><span>개인정보</span><br/>
              비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인정보를 입력하세요. 공개 프로필에는 포함되지 않습니다.
            </div>
          </div>
          <div className="editEmail">
            <label><input className="editInput" value={userEmail} onChange={onChangeUserEmail}/></label>
            <button>이메일 확인</button>
          </div>
          <div className="editNumber">
            <label><input className="editInput" value={userNumber} onChange={onChangeUserNumber}/></label>
          </div>
          <div className="editGender">
            <label><input className="editInput" value={userGender} onChange={onChangeUserGender}/></label>

          </div>
          <div>
            <button onClick={EditClickHandler}>제출</button>
            <a onClick={deleteUserClickHandler}>계정을 삭제합니다</a>
            {/*<a onClick={deleteUserClickHandler}>계정을 일시적으로 비활성화</a>*/}
          </div>
        </div>

      </div>
    </>
  )
};

export default React.memo(EditProfile);