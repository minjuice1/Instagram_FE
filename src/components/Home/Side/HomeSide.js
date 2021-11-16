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
    </>
  )
}

export default HomeSide;