import pp from "../../../image/profile.jpg";
import "./Profile.scss";

const ProfileStory = () => {

  return(
    <>
      <div className="profile_storiesBox">
      	<div className="profile_stories">
      		<div className="profile_story">
      			<div className="profile_storyBox">
      				<img src={pp} alt="profile"/>
      			</div>
      			<div className="profile_storyName">스토리</div>
      		</div>
      		<div className="profile_story">
      			<div className="profile_storyBox">
      				<img src={pp} alt="profile"/>
      			</div>
      			<div className="profile_storyName">스토리</div>
      		</div>
      	</div>
      </div>
    </>
  )
}

export default ProfileStory;