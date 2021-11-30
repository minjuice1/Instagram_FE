import "./EditUser.scss";
import EditProfile from "./EditProfile";

const EditUser = () => {

  return(
    <>
      <div className="insta_layout">
      <div className="edit_profile">
        <div>프로필 편집</div>
        <div>비밀번호 변경</div>
        <div>앱 및 웹사이트</div>
        <div>이메일 및 SMS</div>
        <div>푸시 알림</div>
        <div>연락처 관리</div>
        <div>개인정보 및 보안</div>
        <div>로그인 활동</div>
        <div>Instagram에서 보낸 이메일</div>
        <div>프로페셔널 계정으로</div>
        <div>메타</div>
        
        </div>
        <div>
        <EditProfile/>
      </div>
      </div>
    </>
  )
}

export default EditUser;