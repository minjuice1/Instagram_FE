import "./_DirectMessage.scss";
import {none_profile} from "../../../../common/IconImage";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, saveUser} from "../../../../redux/socket/socketSlice";


const MessageModalCard = ({_id, name, profileImage, userId}) => {
  const dispatch = useDispatch();

  const [Checked, setChecked] = useState(false);
  // const [isChecked, SetIsChecked] = useState(false);

  const user = useSelector(state=> state.socket.userList);



console.log(user)
  useEffect(() => {
    setChecked(false);
    if(user.findIndex((find) => find.userId === userId) === -1){
     setChecked(false);
    }
    if(user.findIndex((find) => find.userId === userId) !== -1){
      setChecked(true);
    }
  },)

  const checkHandler = ({target}) => {
    setChecked(!Checked);


    if(target.checked){
      dispatch(saveUser({
        userId,
        isChecked: true,
        }
      ))
    }else if (!target.checked){
      dispatch(deleteUser(
        userId
      ))
    }

  }

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
          <input type="checkbox" value={userId} checked={Checked} onChange={(e) => checkHandler(e)} />
        </div>
      </div>
    </>
  )
}

export default MessageModalCard;