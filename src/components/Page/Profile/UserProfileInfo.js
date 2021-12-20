import {React, useEffect, useMemo, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

// 모달
import {modal_check, followers_modal_check, following_modal_check, similarAccount_modal_check} from "../../../redux/modal/modalSlice";

// import FollowingModal from "./ProfileModal/FollowingModal";

import SimilarAccountModal from "./OtherProfile/OtherProfileModal/SimilarAccountModal";
import OtherProfileSettingModal from "./OtherProfile/OtherProfileModal/OtherProfileSettingModal";

// scss, icon, img
import "./Profile.scss";
import pp from "../../../image/profile.jpg"
import {FiSettings, FiPlayCircle, FiChevronDown, FiChevronUp,} from "react-icons/fi";
import { BiBookmark, BiDotsHorizontalRounded } from "react-icons/bi";
import { FaUserCheck, FaChevronCircleRight } from "react-icons/fa";
import {getFollower, userFollow} from "../../../redux/user/user";
import UserFollower from "./Follow/UserFollower";
import UserFollow from "./Follow/UserFollow";
import {useParams} from "react-router";


const OtherProfile = ({userId, name, totalFollow, totalFollower,
                        totalPost, introdution, Id, profileImage, my_follow}) => {
  const dispatch = useDispatch();


  console.log(my_follow);

  // 프로필 편집, 팔로워, 팔로우 모달
  const SimilarAccount_Modal = useSelector(
    (state) => state.modal.similarAccount_modal,
  );

  const show_postModal = () => {
    dispatch(modal_check());
  };

  const show_similarAccount_modal = () => {
    dispatch(similarAccount_modal_check());
  };

  // 추천 계정
  const [recomAccountbtn, SetRecomAccountbtn] = useState(false);

  const show_recomAccountbtn = () => {
    SetRecomAccountbtn(!recomAccountbtn);
  };
  const followerList = useSelector(state=>state.user.FollowerList);
  console.log(followerList)

  //팔로우or언팔로우 하기
  const [isfollowing, SetIsFollowing] = useState(false);
  const [followerCount, SetFollowerCount] = useState(totalFollower);


  console.log(followerCount);

  const follower_user = totalFollower;

  useEffect(() => {
    SetFollowerCount(follower_user);
    dispatch(getFollower({
      Id: Id,
    }))

 if(my_follow){

   SetIsFollowing(true);
 }else{
   SetFollowerCount(followerCount);
   SetIsFollowing(false);
 }
  },[dispatch, SetFollowerCount, my_follow, totalFollower]);

  const followClickHandler = () => {
    dispatch(userFollow({
      Id,
    }))
    SetIsFollowing(!isfollowing);
    if(isfollowing){
      SetFollowerCount(follower_user - 1);
    }else {
      SetFollowerCount(follower_user + 1);
    }

  }
  return (
    <>
      {SimilarAccount_Modal && <SimilarAccountModal />}
          <div className="otherProfile_profileBox">
            <div className="otherProfile_header">
              <div className="otherProfile_header_pp">
                {profileImage?  <img src={profileImage} alt="profile"/> :
                  <img src={pp} alt="profile"/>}

              </div>
              <section className="otherProfile_header_main">
                {isfollowing? (
                  <div className="otherProfile_header_top">
                    <span>{userId}</span>
                    <span className="otherProfile_header_sengMsg">
											메세지 보내기
										</span>

                    <span className="otherProfile_header_askFollowing" onClick={followClickHandler} >
											<FaUserCheck />
										</span>
                    {recomAccountbtn ? (
                      <span
                        className="otherProfile_header_moreBtnOn"
                        onClick={show_recomAccountbtn}>
												<FiChevronUp />
											</span>)
                      : (
                      <span
                        className="otherProfile_header_moreBtnOff"
                        onClick={show_recomAccountbtn}
                      >
												<FiChevronDown />
											</span>
                    )}

                    <BiDotsHorizontalRounded
                      onClick={show_postModal}
                      className="otherProfile_settings"
                    />
                  </div>
                ) : (
                  <div className="otherProfile_header_top">
                    <span>{userId}</span>
                    <span className="otherProfile_header_following" onClick={followClickHandler}>
											<a>팔로우</a>
										</span>
                    {recomAccountbtn ? (
                      <span
                        className="otherProfile_header_moreBtnOn"
                        onClick={show_recomAccountbtn}
                      >
												<FiChevronUp />
											</span>
                    ) : (
                      <span
                        className="otherProfile_header_moreBtnOff"
                        onClick={show_recomAccountbtn}
                      >
												<FiChevronDown />
											</span>
                    )}
                    <BiDotsHorizontalRounded
                      onClick={show_postModal}
                      className="otherProfile_settings"
                    />
                  </div>
                )}

                <ul className="otherProfile_header_mid">
									<span>
										게시물 <span>{totalPost}</span>
									</span>
                  {/*팔로워*/}
                  <UserFollower totalFollower={followerCount}/>
                  <UserFollow totalFollow={totalFollow}/>
                </ul>
                <div className="otherProfile_header_name">
                  {name}
                </div>
                <div className="otherProfile_header_bottom">
                  {introdution}
                </div>
              </section>
            </div>

            {recomAccountbtn && (
              <div className="otherProfile_header_hiddenBox">
                <div className="otherProfile_recomBox">
                  <span className="otherProfile_recomBox_title">추천 계정</span>
                  <a
                    className="otherProfile_recomBox_allBtn"
                    onClick={show_similarAccount_modal}
                  >
                    모두 보기
                  </a>
                </div>
                <div className="otherProfile_recomBox_eachBox">
                  <div className="otherProfile_recomBox_each">
                    <ul>
                      <li>
                        <div className="otherProfile_recomBox_exit">
                          <button className="otherProfile_recomBox_removeBtn">
                            X
                          </button>
                          <div className="otherProfile_recomBox_userBox">
                            <div className="otherProfile_recomBox_pp">
                              <img src={pp} alt="profile"/>
                            </div>
                            <div className="otherProfile_recomBox_Id">
                              testtest
                            </div>
                            <div className="otherProfile_recomBox_name">
                              nickname
                            </div>
                            <button className="otherProfile_recomBox_btn">
                              팔로우
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="otherProfile_recomBox_exit">
                          <button className="otherProfile_recomBox_removeBtn">
                            X
                          </button>
                          <div className="otherProfile_recomBox_userBox">
                            <div className="otherProfile_recomBox_pp">
                              <img src={pp} alt="profile"/>
                            </div>
                            <div className="otherProfile_recomBox_Id">
                              testtest
                            </div>
                            <div className="otherProfile_recomBox_name">
                              nickname
                            </div>
                            <button className="otherProfile_recomBox_btn">
                              팔로우
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="otherProfile_recomBox_exit">
                          <button className="otherProfile_recomBox_removeBtn">
                            X
                          </button>
                          <div className="otherProfile_recomBox_userBox">
                            <div className="otherProfile_recomBox_pp">
                              <img src={pp} alt="profile"></img>
                            </div>
                            <div className="otherProfile_recomBox_Id">
                              testtest
                            </div>
                            <div className="otherProfile_recomBox_name">
                              nickname
                            </div>
                            <button className="otherProfile_recomBox_btn">
                              팔로우
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button className="otherProfile_recomBox_moreBtn">
                    <FaChevronCircleRight size={23} />
                  </button>
                </div>
              </div>
            )}
          </div>


    </>
  );
};

export default OtherProfile;