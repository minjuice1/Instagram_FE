import {FiSettings} from "react-icons/fi";
import "./Profile.scss";
import {followers_modal_check, following_modal_check, modal_check} from "../../../redux/modal/modalSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import pp from "../../../image/profile.png";
import UserFollower from "../User/Follow/UserFollower";
import {useState} from "react";
import {profile_setting} from "../../../common/IconImage";
import UserFollow from "../User/Follow/UserFollow";
import ProfileChangeImage from "../User/EditUser/ProfileChangeImage";
import ProfileImgModal from "../User/EditUser/ProfileImgModal";
import ProfileSettingModal from "./CommonProfile/ProfileSettingModal";
import ProfileModal from "./CommonProfile/ProfileSettingModal";


//프로필이 자기일 때 보여주는 화면
const MyProfileInfo = ({user_data}) => {
  const navigate = useNavigate();

  //모달관리 (프로필이미지 변경, 설정)
  const [imageChange, SetImageChange] = useState(false);
  const [setting, SetSetting] = useState(false);

  const imageChangeClickHandler = () => {
    SetImageChange(!imageChange);
  }
  const settingClickHandler = () => {
    SetSetting(true);
  };

  const editProfileClickHandler = () => {
    navigate("/edituser");
  }
  return(
    <>
      <div className="imageChange_modal">
      {imageChange && <ProfileImgModal SetImageChange={SetImageChange} imageChange={imageChange} />}
      </div>
      {setting && <ProfileModal Setsetting={SetSetting}/>}
    <div className="profile_header">

      <div className="profile_header_image" onClick={imageChangeClickHandler}>
        {user_data.profileImage? <img src={user_data.profileImage} alt="profile"/>:
          <img src={pp} alt={"profile"}/>}

      </div>
      <section className="profile_header_main">
        <div className="profile_header_top">
          <span>{user_data.userId}</span>
          <span onClick={editProfileClickHandler}>프로필 편집</span>
          <img className="profile_settings" src={profile_setting}  onClick={settingClickHandler}/>

        </div>
        <ul className="profile_header_mid">
									<span>
										게시물 <span>{user_data.totalPost}</span>
									</span>

            <UserFollower totalFollower={user_data.totalFollower}/>

          <UserFollow totalFollow={user_data.totalFollow}/>
        </ul>
        <div className="profile_header_name">{user_data.name}</div>
        <div className="profile_header_bottom">{user_data.introdution}</div>
      </section>

    </div>
    </>
  )
}

export default MyProfileInfo;