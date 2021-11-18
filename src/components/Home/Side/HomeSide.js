import "./HomeSide.scss";
import profile from "../../../image/profile.jpg";
import SideRecommend from "./SideRecommend";

const HomeSide = () => {

  return(
    <>
      <div className="side">
        <div className="side-my">
          <div className="side-image">
            {/*<img src={profile}/>*/}
          </div>
          <div className="side_profile">
            <div className="side_myprofile">hyemin0805</div>
            <div className="side_myprofile">Hyemin Park</div>
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

export default HomeSide;