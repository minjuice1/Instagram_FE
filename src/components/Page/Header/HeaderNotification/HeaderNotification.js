import profile from "../../../../image/profile.jpg";
import React, {useEffect} from "react";
import {getNotification} from "../../../../redux/user/user";
import {useDispatch, useSelector} from "react-redux";
import HeaderNotificatinCard from "./HeaderNotificatinCard";
import "./_HeaderNotification.scss";

const HeaderNotification = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotification())
  }, [dispatch])

  const notification = useSelector(state => state.user.notification);


  return (
    <>
      <div className="header_notification">
        {notification && notification.map((noti) => (
          <HeaderNotificatinCard date={noti.date} notiType={noti.notiType}
                                 post={noti.post} sendUser={noti.sendUser}
                                 isFollow={noti.isFollow}/>
        ))}

      </div>
    </>
  )
}

export default HeaderNotification;