//새로운 채팅에서 유저 선택

import "./_DirectMessage.scss";

const CheckUser = ({userId, userInfo,SetUserInfo}) => {

  console.log(userId);
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