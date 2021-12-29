import {useState} from "react";
import {useDispatch} from "react-redux";
import {userFollow} from "../redux/user/user";
import "./_FollowButton.scss";

const FollowButton = ({isFollow, _id, isFollowing}) => {
  const dispatch = useDispatch();
  const [followButton, SetFollowButton] = useState(isFollow);
  console.log(_id);

  const followClickHandler = () => {
    dispatch(userFollow({
      isFollowing,
      Id: _id,
    }))
   SetFollowButton(!followButton);
  }

  return(
    <>
      <div className="follow_button_style">
      {followButton?
        <button className="card_following_button" onClick={followClickHandler}>팔로잉</button> :
          <button className="card_follow_button"  onClick={followClickHandler}>팔로우</button>
      }
      </div>
    </>
  )
}

export default FollowButton;