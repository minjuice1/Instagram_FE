//새로운 채팅에서 유저 선택

import "./_DirectMessage.scss";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../../../redux/socket/socketSlice";

const CheckUser = ({userId}) => {
  const dispatch = useDispatch();

  const RemoveClickHandler = () => {
    dispatch(deleteUser(
      userId
    ))
  }
  return(
    <>
      <div className="checkUser" onClick={RemoveClickHandler}>
        {userId} ×
      </div>
    </>
  )
}

export default CheckUser;