// import ProfileSettingModal from "./MyProfileModal/ProfileSettingModal";
// import FollowingModal from "../ProfileModal/FollowingModal";
// import FollowersModal from "../ProfileModal/FollowersModal";
// import pp from "../../../image/profile.jpg";
// import {FiPlayCircle, FiSettings} from "react-icons/fi";
// import {Link} from "react-router-dom";
// import {MdGridOn} from "react-icons/md";
// import {BiBookmark} from "react-icons/bi";
// import {RiAccountBoxLine} from "react-icons/ri";
// import ProfilePosts from "../CommonProfile/ProfilePosts";
// import ProfileVideo from "../CommonProfile/ProfileVideo";
// import ProfileSaved from "../CommonProfile/ProfileSaved";
// import ProfileTagged from "../CommonProfile/ProfileTagged";
// import {React} from "react";
//
// {is_modal && <ProfileSettingModal/>}
// {following_modal && <FollowingModal/>}
// {followers_modal && <FollowersModal/>}
//
// <div className="profile_all">
//   <div className="profile_content">
//     <div className="profile_profileBox">
//       <div className="profile_header">
//         <div className="profile_header_pp">
//           <img src={pp} alt="profile"></img>
//         </div>
//         <section className="profile_header_main">
//           <div className="profile_header_top">
//             <span>testtest</span>
//             <span>프로필 편집</span>
//             <FiSettings
//               onClick={show_postModal}
//               className="profile_settings"
//             />
//           </div>
//           <ul className="profile_header_mid">
// 									<span>
// 										게시물 <span>10</span>
// 									</span>
//             <span
//               onClick={show_followers_modal}
//               className="profile_followers_modal"
//             >
// 										팔로워 <span>555</span>
// 									</span>
//             <span
//               onClick={show_following_modal}
//               className="profile_following_modal"
//             >
// 										팔로우 <span>999</span>
// 									</span>
//           </ul>
//           <div className="profile_header_name">내 프로필 이름</div>
//           <div className="profile_header_bottom">상태메세지</div>
//         </section>
//       </div>
//       {/*<ProfileStory/>*/}
//       <div className="profile_post_dir" role="tablist">
//         {ClickedPosts ? (
//             <a className="profile_post_clicked">
// 									<span value={posts}>
// 										<Link
//                       to={"/profile/"}
//                       className="profile_post_clickOn"
//                       onClick={postsClickHandler}>
// 											<MdGridOn/> 게시물
// 										</Link>
// 									</span>
//             </a>)
//           : (<a className="profile_post_unclicked">
// 									<span value={posts}>
// 										<Link
//                       to={"/profile/"}
//                       className="profile_post_clickOff"
//                       onClick={postsClickHandler}>
// 											<MdGridOn/> 게시물
// 										</Link>
// 									</span>
//             </a>
//           )}
//
//         {ClickedVideo ? (
//           <a className="profile_post_clicked">
// 									<span value={video}>
// 										<Link
//                       to={"/profile/channel"}
//                       className="profile_post_clickOn"
//                       onClick={videoClickHandler}
//                     >
// 											<FiPlayCircle/> 동영상
// 										</Link>
// 									</span>
//           </a>
//         ) : (
//           <a className="profile_post_unclicked">
// 									<span value={video}>
// 										<Link
//                       to={"/profile/channel"}
//                       className="profile_post_clickOff"
//                       onClick={videoClickHandler}
//                     >
// 											<FiPlayCircle/> 동영상
// 										</Link>
// 									</span>
//           </a>
//         )}
//
//         {ClickedSaved ? (
//           <a className="profile_post_clicked">
// 									<span value={saved}>
// 										<Link
//                       to={"/profile/saved"}
//                       className="profile_post_clickOn"
//                       onClick={savedClickHandler}
//                     >
// 											<BiBookmark/> 저장됨
// 										</Link>
// 									</span>
//           </a>
//         ) : (
//           <a className="profile_post_unclicked">
// 									<span value={saved}>
// 										<Link
//                       to={"/profile/saved"}
//                       className="profile_post_clickOff"
//                       onClick={savedClickHandler}
//                     >
// 											<BiBookmark/> 저장됨
// 										</Link>
// 									</span>
//           </a>
//         )}
//         {ClickedTagged ? (
//           <a className="profile_post_clicked">
// 									<span value={tagged}>
// 										<Link
//                       to={"/profile/tagged"}
//                       className="profile_post_clickOn"
//                       onClick={taggedClickHandler}
//                     >
// 											<RiAccountBoxLine/> 태그됨
// 										</Link>
// 									</span>
//           </a>
//         ) : (
//           <a className="profile_post_unclicked">
// 									<span value={tagged}>
// 										<Link
//                       to={"/profile/tagged"}
//                       className="profile_post_clickOff"
//                       onClick={taggedClickHandler}
//                     >
// 											<RiAccountBoxLine/> 태그됨
// 										</Link>
// 									</span>
//           </a>
//         )}
//       </div>
//       {posts && (
//         <div className="OtherProfile_postsBox">
//           <ProfilePosts/>
//         </div>
//       )}
//       {video && (
//         <div className="OtherProfile_postsBox">
//           <ProfileVideo/>
//         </div>
//       )}
//       {saved && (
//         <div className="OtherProfile_postsBox">
//           <ProfileSaved/>
//         </div>
//       )}
//       {tagged && (
//         <div className="OtherProfile_postsBox">
//           <ProfileTagged/>
//         </div>
//       )}
//     </div>
//   </div>
// </div>