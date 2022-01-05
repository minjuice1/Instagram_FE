import React, {useEffect, useState} from "react";
import {socket} from "../../common/socket";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./_Socket.scss";
import {none_profile} from "../../common/IconImage";
import {useNavigate} from "react-router";


const Notification = () => {
  const navigate = useNavigate();

  const customId = "custom-id-yes";

  useEffect(() => {
    console.log(socket)
  }, [])

  socket.on("follow", (payload) => {
    console.log(payload);
    const is_follow = payload.isFollow;
    const profile_img = payload.sendUser.profileImage;
    const Msg = ({ closeToast, toastProps }) => (
      <div className="socket_post_like">
        <div className="my_info">
          {profile_img !== null &&  <img src={payload.sendUser.profileImage} alt="profile_img"/>}
          {profile_img === null &&  <img src={none_profile} alt="profile_img"/>}
          <div><a>{payload.sendUser.userId}</a>님이 팔로우 하였습니다</div>
          {is_follow?<button className="socket_following">팔로잉</button>:<button className="socket_follow">팔로우</button> }
        </div>

        <button onClick={closeToast}>Close</button>
      </div>
    );
    toast(<Msg/>, { toastId: customId})
    console.log(payload)
  },[socket]);



  socket.on("postLike", (payload) => {
    console.log(payload);
    const profile_img = payload.sendUser.profileImage;
    const postClickHandler = () => {
      navigate(`/postdetail/${payload.post.postId}`)
    }
    const Msg = ({toastProps }) => (
      <div className="socket_post_like">
        <div className="my_info">
          {profile_img !== null &&  <img src={payload.sendUser.profileImage} alt="profile_img"/>}
          {profile_img === null &&  <img src={none_profile} alt="profile_img"/>}

          <div onClick={postClickHandler}><a>{payload.sendUser.userId}</a>님이 게시물의 좋아요를 클릭하였습니다. <img src= {payload.post.imageUrl} alt="post_img"/></div>
        </div>

        {/*<button onClick={closeToast}>Close</button>*/}
      </div>
    );
    toast(<Msg/>, { toastId: customId})
    console.log(payload)
  },[socket]);

  return(
    <>
      <ToastContainer position={"bottom-right"} closeOnClick={false}/>

    </>
  )
}
export default Notification;