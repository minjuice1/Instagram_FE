import "./EditUser.scss";
import EditProfile from "./EditProfile";
import {Link} from "react-router-dom";
import {useState} from "react";
import EditPassword from "./EditPassword";

const EditUser = () => {
  

  const [editProfile, SetEditProfile] = useState(true);
  const [editPwd, SetEditPwd] = useState(false);

  const editProfileClickHandler = () => {
    SetEditProfile(true);
    SetEditPwd(false);
  }
  const editPwdClickHandler = () => {
    SetEditPwd(true);
    SetEditProfile(false);
  }


  return(
    <>
      <div className="insta_layout">
      <div className="edit_profile">
        {editProfile? <div className="edit_menu_active" onClick={editProfileClickHandler}>프로필 편집</div> :
          <div className="edit_menu" onClick={editProfileClickHandler}>프로필 편집</div>}
        {editPwd? <div className="edit_menu_active" onClick={editPwdClickHandler}>비밀번호 변경</div>:
          <div className="edit_menu" onClick={editPwdClickHandler}>비밀번호 변경</div>}
        <div className="edit_menu">앱 및 웹사이트</div>
        <div className="edit_menu">이메일 및 SMS</div>
        <div className="edit_menu">푸시 알림</div>
        <div className="edit_menu">연락처 관리</div>
        <div className="edit_menu">개인정보 및 보안</div>
        <div className="edit_menu">로그인 활동</div>
        <div className="edit_menu">Instagram에서 보낸 이메일</div>
        <div className="edit_menu">프로페셔널 계정으로</div>
        <div className="edit_menu">메타</div>
        
        </div>
        <div>
          {editProfile &&  <EditProfile/>}
          {editPwd && <EditPassword/>}

      </div>
      </div>
    </>
  )
}

export default EditUser;