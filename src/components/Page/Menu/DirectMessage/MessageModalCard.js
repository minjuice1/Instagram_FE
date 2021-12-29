import "./_DirectMessage.scss";
import {none_profile} from "../../../../common/IconImage";
import {useEffect, useState} from "react";


const MessageModalCard = ({_id, name, profileImage, userId, user_id, SetCheck, check, index, checkedItemHandler,
                          userInfo, SetUserInfo}) => {


  const [bChecked, setChecked] = useState(false);
  console.log(index);

  useEffect(() => {
    setChecked(false);
  },[userId]);


  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(index, target.checked);
    user_id(userId);
    SetCheck(true);

  };

  return(
    <>
      <div className="message_modal_card">
        <div>
          {profileImage?    <img src={profileImage} alt="profile_image"/> :
            <img src={none_profile} alt="profile_image"/>}

        </div>
        <div>
          <div>{userId}</div>
          <div>{name}</div>
        </div>
        <div>
          <input type="checkbox"  checked={bChecked} onChange={(e) => checkHandler(e)} />
        </div>
      </div>
    </>
  )
}

export default MessageModalCard;