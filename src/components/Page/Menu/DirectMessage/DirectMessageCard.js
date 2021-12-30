import "./_DirectMessage.scss";
import {none_profile} from "../../../../common/IconImage";

const DirectMessageCard = ({roomId, Room ,user}) => {


  console.log("맵", roomId);

  console.log(user);

  const ChatRoomClickHandler = () => {
    Room.push(roomId);
  }


  return(
    <>
      <div className="direct_message_user" onClick={ChatRoomClickHandler} >
        <div className="direct_userimage">
          {user[0].profileImage ?     <img src={user[0].profileImage}/> : <img src={none_profile}/>  }

        </div>
        <div>
          <div>{user[0].userId}</div>
          <div>최근 활동: 어제</div>
        </div>
      </div>
    </>
  )
}

export default DirectMessageCard;