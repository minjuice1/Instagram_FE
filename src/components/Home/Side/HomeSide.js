import "./HomeSide.scss";
import profile from "../../../image/profile.jpg";

const HomeSide = () => {

  return(
    <>
      <div className="side">
        <div className="side-my">
          <img src={profile}/>
          <div className="side_profile">
            <div>hyemin0805</div>
            <div>Hyemin Park</div>
          </div>
          <div className="side_blue">전환</div>
        </div>
      </div>
      <div className="side_recommend">
        <div className="side_title">
          <div>회원님을 위한 추천</div>
          <div>모두 보기</div>
        </div>
        <div className="follow_recommend">
          <div>
            <img src={profile}/>
          </div>
          <div>nolzencoffee</div>
        </div>
      </div>
    </>
  )
}

export default HomeSide;