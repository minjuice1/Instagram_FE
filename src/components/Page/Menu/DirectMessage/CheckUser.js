//새로운 채팅에서 유저 선택

import "./_DirectMessage.scss";
import {useEffect} from "react";

const CheckUser = ({userId, userInfo, SetUserInfo}) => {
  console.log("제발찍혀라",userInfo);

  const RemoveClickHandler = () => {
    SetUserInfo(userInfo.filter(user => userId !== user));
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