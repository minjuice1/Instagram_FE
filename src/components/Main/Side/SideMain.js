import "./SideMain.scss";
import {none_profile} from "../../../common/IconImage";
import SideRecommend from "./SideRecommend";
import {useSelector} from "react-redux";

const SideMain = () => {


  //개인 유저정보 불러오기
  const user_info = useSelector(state=>state.user.user);

  //등록한 프로필 사진이 있는 경우와 없는 경우 구분.
  const profile_img = useSelector(state=>state.user.user.profileImage);
  const my_img = profile_img? profile_img : none_profile;


  return(
    <>
      <div className="side">
        <div className="side-my">
          <div className="side-image">
            <img src={my_img} alt="my_profile_img"/>
          </div>
          <div className="side_profile">
            <div className="side_myprofile">{user_info.userId}</div>
            <div className="side_myprofile">{user_info.name}</div>
          </div>
          <div className="side_blue">전환</div>
        </div>

      <div className="side_recommend">
        <div className="side_title">
          <div>회원님을 위한 추천</div>
          <a>모두 보기</a>
        </div>
          <SideRecommend/>
      </div>
      </div>
    </>
  )
}

export default SideMain;