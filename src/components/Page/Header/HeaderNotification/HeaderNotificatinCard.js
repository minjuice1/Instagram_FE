import {none_profile} from "../../../../common/IconImage";
import FollowButton from "../../../../common/FollowButton";
import "./_HeaderNotification.scss";

const HeaderNotificatinCard = ({date, notiType, post, sendUser, isFollow}) => {


  //글쓴 시간 계산. ex) 방금전, 몇분전 으로 표시하기 위해 사용함.
  function displayTime(value) {
    const today = new Date();
    const nowTime = new Date(value);

    const displayTime = Math.floor(
      (today.getTime() - nowTime.getTime()) / 1000 / 60,
    );
    if (displayTime < 1) return "방금전";
    if (displayTime < 60) {
      return `${displayTime}분전`;
    }

    const displayTimeHour = Math.floor(displayTime / 60);
    if (displayTimeHour < 24) {
      return `${displayTimeHour}시간전`;
    }

    const displayTimeDay = Math.floor(displayTime / 60 / 24);
    if (displayTimeDay < 365) {
      return `${displayTimeDay}일전`;
    }

    return `${Math.floor(displayTimeDay / 365)}년전`;
  }

  const time = displayTime(date);
  console.log(time);
  return(
    <>
      {/*포스트좋아요 클릭했을 때*/}
      {notiType === "postLike" &&
      <div className="notification_post">
        <div className="noti_profile_img">
          {sendUser.profileImage ?   <img src={sendUser.profileImage} alt="profile_img"/>:
            <img src={none_profile} alt="profile_img"/>}

        </div>
        <div className="noti_post_like">
          <a className="noti_user">{sendUser.userId}</a>님이 회원님의 게시물을 좋아합니다.
          <a className="noti_time">{time}</a>
        </div>
        <div className="noti_post_picture">
         <img src={post[0].imageUrl} alt="post_image"/>
        </div>
      </div>}
      {notiType === "follow" &&
      <div className="notification_post">
          <div className="noti_profile_img">
            {sendUser.profileImage ?   <img src={sendUser.profileImage} alt="profile_img"/>:
              <img src={none_profile} alt="profile_img"/>}
          </div>
          <div className="noti_post_like">
            <a className="noti_user">{sendUser.userId}</a>님이 회원님을 팔로우하기 시작했습니다.
            <a className="noti_time">{time}</a>
          </div>
        <div className="noti_button">
            <FollowButton _id={sendUser._id} isFollow={isFollow}/>
        </div>
      </div>
      }

    </>
  )
}

export default HeaderNotificatinCard;