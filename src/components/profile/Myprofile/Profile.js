import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import ProfileVideo from "../CommonProfile/ProfileVideo";
import ProfilePosts from "../CommonProfile/ProfilePosts";
import ProfileTagged from "../CommonProfile/ProfileTagged";
import ProfileSaved from "../CommonProfile/ProfileSaved";

// 모달
import { modal_check } from "../../../redux/modal/modalSlice";
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
import { FiSettings, FiPlayCircle } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { RiAccountBoxLine } from "react-icons/ri";
import { MdGridOn } from "react-icons/md";

const Profile = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// 	// 게시물, 동영상, 저장됨, 태그됨
	const [ClickedPosts, setClickedPosts] = useState(true);
	const [ClickedVideo, setClickedVideo] = useState();
	const [ClickedSaved, setClickedSaved] = useState();
	const [ClickedTagged, setClickedTagged] = useState();
	const [posts, SetPosts] = useState(true);
	const [video, SetVideo] = useState(true);
	const [saved, SetSaved] = useState(true);
	const [tagged, SetTagged] = useState(true);

	// 게시물, 동영상, 태그됨
	const postsClickHandler = (event) => {
		SetPosts(true);
		setClickedPosts(!ClickedPosts);
		setClickedVideo(false);
		setClickedSaved(false);
		setClickedTagged(false);
	};

	const videoClickHandler = (event) => {
		SetVideo(true);
		setClickedVideo(!ClickedVideo);
		setClickedPosts(false);
		setClickedSaved(false);
		setClickedTagged(false);
	};

	const savedClickHandler = (event) => {
		SetSaved(true);
		setClickedSaved(!ClickedSaved);
		setClickedVideo(false);
		setClickedPosts(false);
		setClickedTagged(false);
	};

	const taggedClickHandler = (event) => {
		SetTagged(true);
		setClickedTagged(!ClickedTagged);
		setClickedPosts(false);
		setClickedVideo(false);
		setClickedSaved(false);
	};

	// 프로필 편집, 팔로워, 팔로우 모달
	const is_modal = useSelector((state) => state.modal.is_modal);
	const following_modal = useSelector((state) => state.modal.following_modal);
	const followers_modal = useSelector((state) => state.modal.followers_modal);

	const show_postModal = () => {
		dispatch(modal_check());
	};

	const show_following_modal = () => {
		dispatch(following_modal_check());
	};

	const show_followers_modal = () => {
		dispatch(followers_modal_check());
	};

	return (
		<>
			{is_modal && <ProfileSettingModal />}
			{following_modal && <FollowingModal />}
			{followers_modal && <FollowersModal />}

			<div className="profile_all">
				<div className="profile_content">
					<div className="profile_profileBox">
						<div className="profile_header">
							<div className="profile_header_pp">
								<img src={pp} alt="profile"></img>
							</div>
							<section className="profile_header_main">
								<div className="profile_header_top">
									<span>testtest</span>
									<span>프로필 편집</span>
									<FiSettings
										onClick={show_postModal}
										className="profile_settings"
									/>
								</div>
								<ul className="profile_header_mid">
									<span>
										게시물 <span>10</span>
									</span>
									<span
										onClick={show_followers_modal}
										className="profile_followers_modal"
									>
										팔로워 <span>555</span>
									</span>
									<span
										onClick={show_following_modal}
										className="profile_following_modal"
									>
										팔로우 <span>999</span>
									</span>
								</ul>
								<div className="profile_header_name">내 프로필 이름</div>
								<div className="profile_header_bottom">상태메세지</div>
							</section>
						</div>
						<div className="profile_storiesBox">
							<div className="profile_stories">
								<div className="profile_story">
									<div className="profile_storyBox">
										<img src={pp} alt="profile"></img>
									</div>
									<div className="profile_storyName">스토리</div>
								</div>
								<div className="profile_story">
									<div className="profile_storyBox">
										<img src={pp} alt="profile"></img>
									</div>
									<div className="profile_storyName">스토리</div>
								</div>
							</div>
						</div>
						<div className="profile_post_dir" role="tablist">
							{ClickedPosts ? (
								<a className="profile_post_clicked">
									<span value={posts}>
										<Link
											to={"/profile/"}
											className="profile_post_clickOn"
											onClick={postsClickHandler}
										>
											<MdGridOn /> 게시물
										</Link>
									</span>
								</a>
							) : (
								<a className="profile_post_unclicked">
									<span value={posts}>
										<Link
											to={"/profile/"}
											className="profile_post_clickOff"
											onClick={postsClickHandler}
										>
											<MdGridOn /> 게시물
										</Link>
									</span>
								</a>
							)}

							{ClickedVideo ? (
								<a className="profile_post_clicked">
									<span value={video}>
										<Link
											to={"/profile/channel"}
											className="profile_post_clickOn"
											onClick={videoClickHandler}
										>
											<FiPlayCircle /> 동영상
										</Link>
									</span>
								</a>
							) : (
								<a className="profile_post_unclicked">
									<span value={video}>
										<Link
											to={"/profile/channel"}
											className="profile_post_clickOff"
											onClick={videoClickHandler}
										>
											<FiPlayCircle /> 동영상
										</Link>
									</span>
								</a>
							)}

							{ClickedSaved ? (
								<a className="profile_post_clicked">
									<span value={saved}>
										<Link
											to={"/profile/saved"}
											className="profile_post_clickOn"
											onClick={savedClickHandler}
										>
											<BiBookmark /> 저장됨
										</Link>
									</span>
								</a>
							) : (
								<a className="profile_post_unclicked">
									<span value={saved}>
										<Link
											to={"/profile/saved"}
											className="profile_post_clickOff"
											onClick={savedClickHandler}
										>
											<BiBookmark /> 저장됨
										</Link>
									</span>
								</a>
							)}
							{ClickedTagged ? (
								<a className="profile_post_clicked">
									<span value={tagged}>
										<Link
											to={"/profile/tagged"}
											className="profile_post_clickOn"
											onClick={taggedClickHandler}
										>
											<RiAccountBoxLine /> 태그됨
										</Link>
									</span>
								</a>
							) : (
								<a className="profile_post_unclicked">
									<span value={tagged}>
										<Link
											to={"/profile/tagged"}
											className="profile_post_clickOff"
											onClick={taggedClickHandler}
										>
											<RiAccountBoxLine /> 태그됨
										</Link>
									</span>
								</a>
							)}
						</div>
						{posts && (
							<div className="OtherProfile_postsBox">
								<ProfilePosts />
							</div>
						)}
						{video && (
							<div className="OtherProfile_postsBox">
								<ProfileVideo />
							</div>
						)}
						{saved && (
							<div className="OtherProfile_postsBox">
								<ProfileSaved />
							</div>
						)}
						{tagged && (
							<div className="OtherProfile_postsBox">
								<ProfileTagged />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
