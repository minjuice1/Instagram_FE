import {React, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import ProfileVideo from "../CommonProfile/ProfileVideo";
import ProfilePosts from "../CommonProfile/ProfilePosts";
import ProfileTagged from "../CommonProfile/ProfileTagged";
import ProfileSaved from "../CommonProfile/ProfileSaved";

// 모달
import {modal_check} from "../../../redux/modal/modalSlice";
import {
  following_modal_check,
  followers_modal_check,
} from "../../../redux/modal/modalSlice";
import ProfileSettingModal from "./MyProfileModal/ProfileSettingModal";
import FollowingModal from "../ProfileModal/FollowingModal";
import FollowersModal from "../ProfileModal/FollowersModal";

// scss, icon, img
import "./Profile.scss";
import "../OtherProfile/OtherProfile.scss";
import pp from "../../../image/profile.jpg";
import {FiSettings, FiPlayCircle} from "react-icons/fi";
import {BiBookmark} from "react-icons/bi";
import {RiAccountBoxLine} from "react-icons/ri";
import {MdGridOn} from "react-icons/md";
import ProfileStory from "./ProfileStory";
import ProfileInfo from "./ProfileInfo";
import {useParams} from "react-router";
import {getProfile} from "../../../redux/user/user";
import {getPost, getUserPost} from "../../../redux/post/post";

const Profile = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  //개인 데이터 불러오기
  const {id} = useParams();
  const user_id = useParams(id).user_Id;

  //userpost를 가져오면서 본인이 맞는지 아닌지 확인
  //자신인지 아닌지 확인
  const [myProfile, SetMyProfile] = useState(false);
  const myId = useSelector(state=>state.user.user.userId);

  useEffect(() => {
    dispatch(getUserPost(user_id));
    if(myId === user_id){
      SetMyProfile(true);
    }
  }, [dispatch]);

  console.log(myProfile);

  // 	// 게시물, 동영상, 저장됨, 태그됨
  const [ClickedPosts, setClickedPosts] = useState(true);
  const [ClickedVideo, setClickedVideo] = useState(false);
  const [ClickedSaved, setClickedSaved] = useState(false);
  const [ClickedTagged, setClickedTagged] = useState(false);



  // 게시물, 동영상, 태그됨
  const postsClickHandler = () => {
    setClickedPosts(true);
    setClickedVideo(false);
    setClickedSaved(false);
    setClickedTagged(false);
    // navigate("/profile");
  };

  const videoClickHandler = () => {
    setClickedVideo(true);
    setClickedPosts(false);
    setClickedSaved(false);
    setClickedTagged(false);
    // navigate("/profile/channel");
  };

  const savedClickHandler = (event) => {
    setClickedSaved(true);
    setClickedVideo(false);
    setClickedPosts(false);
    setClickedTagged(false);
  };

  const taggedClickHandler = (event) => {
    setClickedTagged(true);
    setClickedPosts(false);
    setClickedVideo(false);
    setClickedSaved(false);
  };

  // 프로필 편집, 팔로워, 팔로우 모달

  const is_modal = useSelector((state) => state.modal.is_modal);
  const following_modal = useSelector((state) => state.modal.following_modal);
  const followers_modal = useSelector((state) => state.modal.followers_modal);




 
  return (
    <>
      {is_modal && <ProfileSettingModal/>}
      {following_modal && <FollowingModal/>}
      {followers_modal && <FollowersModal/>}

      <div className="profile_all">
        <div className="profile_content">
          <div className="profile_profileBox">
            {myProfile &&  <ProfileInfo/>}

            <ProfileStory/>
            <div className="profile_post_dir" role="tablist">
              {ClickedPosts ? (
                  <a className="profile_post_clicked">
									<span className="profile_post_clickOn"
                        onClick={postsClickHandler}>
											<MdGridOn/> 게시물
									</span>
                  </a>)
                : (
                  <a className="profile_post_unclicked">
									<span onClick={postsClickHandler}>
											<MdGridOn/> 게시물
									</span>
                  </a>
                )}


              {ClickedVideo ? (
                <a className="profile_post_clicked">
									<span onClick={videoClickHandler}>
											<FiPlayCircle/> 동영상
									</span>
                </a>
              ) : (
                <a className="profile_post_unclicked">
								<span onClick={videoClickHandler}>
											<FiPlayCircle/> 동영상
									</span>
                </a>
              )}
              {ClickedVideo && (
                <div className="OtherProfile_postsBox">
                  <ProfileVideo/>

                </div>
              )}

              {ClickedSaved ? (
                <a className="profile_post_clicked">
									<span onClick={savedClickHandler}>
											<BiBookmark/> 저장됨
									</span>
                </a>
              ) : (
                <a className="profile_post_unclicked">
									<span onClick={savedClickHandler}>
											<BiBookmark/> 저장됨
									</span>
                </a>
              )}
              {ClickedTagged ? (
                <a className="profile_post_clicked">
									<span onClick={taggedClickHandler}>
											<RiAccountBoxLine/> 태그됨
									</span>
                </a>
              ) : (
                <a className="profile_post_unclicked">
									<span onClick={taggedClickHandler}>
											<RiAccountBoxLine/> 태그됨
									</span>
                </a>
              )}
            </div>
            {ClickedPosts && (
              <div className="OtherProfile_postsBox">
                <ProfilePosts/>
              </div>
            )}

            {/*{saved && (*/}
            {/*  <div className="OtherProfile_postsBox">*/}
            {/*    <ProfileSaved/>*/}
            {/*  </div>*/}
            {/*)}*/}
            {/*{tagged && (*/}
            {/*  <div className="OtherProfile_postsBox">*/}
            {/*    <ProfileTagged/>*/}
            {/*  </div>*/}
            {/*)}*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
