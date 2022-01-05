import {React, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

// 모달
import {modal_check, similarAccount_modal_check} from "../../../redux/modal/modalSlice";
import SimilarAccountModal from "./OtherProfile/OtherProfileModal/SimilarAccountModal";

// scss, icon, img
import "./Profile.scss";
import "./_UserProfileInfo.scss";
import none_profile from "../../../image/profile.png"
import {FiChevronDown, FiChevronUp,} from "react-icons/fi";
import {BiDotsHorizontalRounded,} from "react-icons/bi";
import {BsFillPersonCheckFill} from "react-icons/bs";

import {FaChevronCircleRight} from "react-icons/fa";
import {getFollower, userFollow} from "../../../redux/user/user";
import UserFollower from "../User/Follow/UserFollower";
import UserFollow from "../User/Follow/UserFollow";
import AskFollowModal from "../User/Follow/AskFollowModal";
import {profile_setting} from "../../../common/IconImage";
import UserProfileModal from "./OtherProfile/OtherProfileModal/UserProfileModal";


const OtherProfile = ({userId, name, totalFollow, totalFollower,
                        totalPost, introdution, Id, profileImage, my_follow
                      }) => {
  const dispatch = useDispatch();

  const [profileModal, SetProfileModal] = useState(false);

  const profileModalClickHandler = () => {
    SetProfileModal(profileModal => !profileModal);
  }

  const show_postModal = () => {
    dispatch(modal_check());
  };


  // 추천 계정
  const [recomAccountbtn, SetRecomAccountbtn] = useState(false);

  const show_recomAccountbtn = () => {
    SetRecomAccountbtn(!recomAccountbtn);
  };

  //팔로우or언팔로우 하기
  const [isFollowing, SetIsFollowing] = useState(false);
  const [followerCount, SetFollowerCount] = useState(totalFollower);


  const [askModal, SetAskModal] = useState(false);
  const askFollowClickHandler = () => {
    SetAskModal(true);
  }
  useEffect(() => {
    SetFollowerCount(totalFollower);
    dispatch(getFollower({
      Id: Id,
    }))

    if (my_follow) {
      SetIsFollowing(true);
    } else {
      SetIsFollowing(false);
    }
  }, [dispatch, totalFollower, my_follow]);

  const followClickHandler = () => {
    SetIsFollowing(!isFollowing);
    dispatch(userFollow({
      Id, isFollowing,
    }))
    if (isFollowing) {
      SetFollowerCount(followerCount - 1);
    } else {
      SetFollowerCount(followerCount + 1);
    }

  }

  return (
    <>
      {profileModal&& UserProfileModal}
      {askModal && <AskFollowModal askModal={askModal} SetAskModal={SetAskModal}
                                   profileImage={profileImage} userId={userId} Id={Id}
                                   isFollowing={isFollowing} SetIsFollowing={SetIsFollowing}/>}
      <div className="otherProfile_profileBox">
        <div className="otherProfile_header">
          <div className="otherProfile_header_pp">
            <img src={profileImage? profileImage: none_profile} alt="profile_image"/>
          </div>
          <section className="otherProfile_header_main">
            {isFollowing ? (
              <div className="otherProfile_header_top">
                <span>{userId}</span>
                <span className="otherProfile_header_sengMsg">
											메세지 보내기
										</span>

                <span className="otherProfile_header_askFollowing" onClick={askFollowClickHandler}>
											<BsFillPersonCheckFill/>
										</span>
                {/*{recomAccountbtn ? (*/}
                {/*    <span*/}
                {/*      className="otherProfile_header_moreBtnOn"*/}
                {/*      onClick={show_recomAccountbtn}>*/}
								{/*				<FiChevronUp/>*/}
								{/*			</span>)*/}
                {/*  : (<span className="otherProfile_header_moreBtnOff"*/}
                {/*           onClick={show_recomAccountbtn}>*/}
								{/*				<FiChevronDown/>*/}
								{/*			</span>)}*/}

                <BiDotsHorizontalRounded
                  onClick={profileModalClickHandler}
                  className="otherProfile_settings"/>
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
                    onClick={show_recomAccountbtn}>
												<FiChevronUp/>
											</span>
                ) : (
                  <span
                    className="otherProfile_header_moreBtnOff"
                    onClick={show_recomAccountbtn}
                  >
												<FiChevronDown/>
											</span>
                )}
                <BiDotsHorizontalRounded
                  onClick={profileModalClickHandler}
                  className="otherProfile_settings"
                />
              </div>
            )}

            <ul className="otherProfile_header_mid">
									<span>
										게시물 <span>{totalPost}</span>
									</span>
              <UserFollower totalFollower={followerCount}/>
              <UserFollow totalFollow={totalFollow} isFollowing={isFollowing}/>
            </ul>
            <div className="otherProfile_header_name">
              {name}
            </div>
            <div className="otherProfile_header_bottom">
              {introdution}
            </div>
          </section>
        </div>

      {/*  {recomAccountbtn && (*/}
      {/*    <div className="otherProfile_header_hiddenBox">*/}
      {/*      <div className="otherProfile_recomBox">*/}
      {/*        <span className="otherProfile_recomBox_title">추천 계정</span>*/}
      {/*        <a*/}
      {/*          className="otherProfile_recomBox_allBtn"*/}
      {/*          onClick={show_similarAccount_modal}*/}
      {/*        >*/}
      {/*          모두 보기*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*      <div className="otherProfile_recomBox_eachBox">*/}
      {/*        <div className="otherProfile_recomBox_each">*/}
      {/*          <ul>*/}
      {/*            <li>*/}
      {/*              <div className="otherProfile_recomBox_exit">*/}
      {/*                <button className="otherProfile_recomBox_removeBtn">*/}
      {/*                  X*/}
      {/*                </button>*/}
      {/*                <div className="otherProfile_recomBox_userBox">*/}
      {/*                  <div className="otherProfile_recomBox_pp">*/}
      {/*                    <img src={none_profile} alt="profile"/>*/}
      {/*                  </div>*/}
      {/*                  <div className="otherProfile_recomBox_Id">*/}
      {/*                    testtest*/}
      {/*                  </div>*/}
      {/*                  <div className="otherProfile_recomBox_name">*/}
      {/*                    nickname*/}
      {/*                  </div>*/}
      {/*                  <button className="otherProfile_recomBox_btn">*/}
      {/*                    팔로우*/}
      {/*                  </button>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="otherProfile_recomBox_exit">*/}
      {/*                <button className="otherProfile_recomBox_removeBtn">*/}
      {/*                  X*/}
      {/*                </button>*/}
      {/*                <div className="otherProfile_recomBox_userBox">*/}
      {/*                  <div className="otherProfile_recomBox_pp">*/}
      {/*                    <img src={none_profile} alt="profile"/>*/}
      {/*                  </div>*/}
      {/*                  <div className="otherProfile_recomBox_Id">*/}
      {/*                    testtest*/}
      {/*                  </div>*/}
      {/*                  <div className="otherProfile_recomBox_name">*/}
      {/*                    nickname*/}
      {/*                  </div>*/}
      {/*                  <button className="otherProfile_recomBox_btn">*/}
      {/*                    팔로우*/}
      {/*                  </button>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <div className="otherProfile_recomBox_exit">*/}
      {/*                <button className="otherProfile_recomBox_removeBtn">*/}
      {/*                  X*/}
      {/*                </button>*/}
      {/*                <div className="otherProfile_recomBox_userBox">*/}
      {/*                  <div className="otherProfile_recomBox_pp">*/}
      {/*                    <img src={none_profile} alt="profile"/>*/}
      {/*                  </div>*/}
      {/*                  <div className="otherProfile_recomBox_Id">*/}
      {/*                    testtest*/}
      {/*                  </div>*/}
      {/*                  <div className="otherProfile_recomBox_name">*/}
      {/*                    nickname*/}
      {/*                  </div>*/}
      {/*                  <button className="otherProfile_recomBox_btn">*/}
      {/*                    팔로우*/}
      {/*                  </button>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </li>*/}
      {/*          </ul>*/}
      {/*        </div>*/}
      {/*        <button className="otherProfile_recomBox_moreBtn">*/}
      {/*          <FaChevronCircleRight size={23}/>*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  )}*/}
      </div>
      {/*모바일쿼리 적용*/}
      <div className="mobile_profile">
        <div className="mobile_header" >
          <img src={profileImage? profileImage: none_profile} alt="profile_image"/>
          <div className="mobile_header_top">
            <div>   {userId}</div>
            <BiDotsHorizontalRounded
              onClick={profileModalClickHandler}
              className="otherProfile_settings"/>
          </div>
          <div className="mobile_follow">
            {isFollowing?
              <div className="mobile_unfollow">
             <button className="mobile_direct">
											메세지 보내기
										</button>
                <button className="mobile_ask_unfollow" onClick={askFollowClickHandler}>
											<BsFillPersonCheckFill/>
										</button>
            </div>
              : <button className="mobile_following" onClick={followClickHandler}>팔로우</button>}

          </div>

        </div>
        <div className="mobile_introduce">
          <div>{name}</div>
          <div>{introdution}</div>
          {/*<div>{website}</div>*/}
        </div>

        <div className="mobile_header_mid">
          <div>
            게시물
            <div>{totalPost}</div>
          </div>
          <div>
            <UserFollower totalFollower={totalFollower}/>
          </div>
          <div>
            <UserFollow totalFollow={totalFollow}/>
          </div>
        </div>
      </div>


    </>
  );
};

export default OtherProfile;