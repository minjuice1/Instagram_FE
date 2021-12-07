import profile from "../../../image/profile.jpg";
import "./MainStory.scss";

const MainStory = () => {

  return(
  <>
    <div className="home_story">
      <div className="follow_story">
      <div className="story">
        <div><img className="home_story_img" src={profile} alt="story"/></div>
        <div className="story_name">hyemin085</div>
      </div>
        <div className="story">
          <div><img className="home_story_img" src={profile} alt="story"/></div>
          <div className="story_name">hyemin085</div>
        </div>
        <div className="story">
          <div><img className="home_story_img" src={profile} alt="story"/></div>
          <div className="story_name">hyemin085</div>
        </div>
        <div className="story">
          <div><img className="home_story_img" src={profile} alt="story"/></div>
          <div className="story_name">hyemin085</div>
        </div>

      </div>
    </div>


    </>
  )
}

export default MainStory;