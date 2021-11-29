import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// 모달
import {
	modal_check,
	following_modal_check,
	followers_modal_check,
	similarAccount_modal_check,
} from "../../../redux/modal/modalSlice";
import FollowingModal from "../ProfileModal/FollowingModal";
import FollowersModal from "../ProfileModal/FollowersModal";
import SimilarAccountModal from "./OtherProfileModal/SimilarAccountModal";
import OtherProfileSettingModal from "./OtherProfileModal/OtherProfileSettingModal";

// scss, icon, img
import "./OtherProfile.scss";
import pp from "../../../image/profile.jpg";
import { recomtest } from "../../../common/IconImage";
import { FiSettings, FiPlayCircle, FiChevronDown } from "react-icons/fi";
import { BiBookmark, BiDotsHorizontalRounded } from "react-icons/bi";
import { RiAccountBoxLine } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";

const OtherProfile = () => {
	const dispatch = useDispatch();

	const [posts, SetPosts] = useState();
	const [video, SetVideo] = useState();
	const [saved, SetSaved] = useState();
	const [tagged, SetTagged] = useState();

	// 프로필 편집, 팔로워, 팔로우 모달
	const is_modal = useSelector((state) => state.modal.is_modal);
	const following_modal = useSelector((state) => state.modal.following_modal);
	const followers_modal = useSelector((state) => state.modal.followers_modal);
	const SimilarAccount_Modal = useSelector(
		(state) => state.modal.similarAccount_modal,
	);
	const [Isfollowing, SetIsFollowing] = useState(false);

	const show_postModal = () => {
		dispatch(modal_check());
	};

	const show_following_modal = () => {
		dispatch(following_modal_check());
	};

	const show_followers_modal = () => {
		dispatch(followers_modal_check());
	};

	const show_similarAccount_modal = () => {
		dispatch(similarAccount_modal_check());
	};

	return (
		<>
			{is_modal && <OtherProfileSettingModal />}
			{following_modal && <FollowingModal />}
			{followers_modal && <FollowersModal />}
			{SimilarAccount_Modal && <SimilarAccountModal />}

			<div className="otherProfile_all">
				<div className="otherProfile_content">
					<div className="otherProfile_profileBox">
						<div className="otherProfile_header">
							<div className="otherProfile_header_pp">
								<img src={pp} alt="profile"></img>
							</div>
							<section className="otherProfile_header_main">
								{Isfollowing ? (
									<div className="otherProfile_header_top">
										<span>testtest</span>
										<span className="otherProfile_header_sengMsg">
											메세지 보내기
										</span>
										<span className="otherProfile_header_askFollowing">
											<FaUserCheck />
										</span>
										<span className="otherProfile_header_moreBtn">
											<FiChevronDown />
										</span>
										<BiDotsHorizontalRounded
											onClick={show_postModal}
											className="otherProfile_settings"
										/>
									</div>
								) : (
									<div className="otherProfile_header_top">
										<span>testtest</span>
										<span className="otherProfile_header_following">
											팔로우
										</span>
										<span className="otherProfile_header_moreBtn">
											<FiChevronDown />
										</span>
										<BiDotsHorizontalRounded
											onClick={show_postModal}
											className="otherProfile_settings"
										/>
									</div>
								)}

								<ul className="otherProfile_header_mid">
									<span>
										게시물 <span>10</span>
									</span>
									<span
										onClick={show_followers_modal}
										className="otherProfile_followers_modal"
									>
										팔로워 <span>555</span>
									</span>
									<span
										onClick={show_following_modal}
										className="otherProfile_following_modal"
									>
										팔로우 <span>999</span>
									</span>
								</ul>
								<div className="otherProfile_header_bottom">
									다른 사람 상태메세지
								</div>
							</section>
						</div>
						<div className="otherProfile_storiesBox">
							<div className="otherProfile_stories">
								<div className="otherProfile_story">
									<div className="otherProfile_storyBox">
										<img src={pp} alt="profile"></img>
									</div>
									<div className="otherProfile_storyName">스토리</div>
								</div>
								<div className="otherProfile_story">
									<div className="otherProfile_storyBox">
										<img src={pp} alt="profile"></img>
									</div>
									<div className="otherProfile_storyName">스토리</div>
								</div>
							</div>
						</div>

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
												<div className="otherProfile_recomBox_userBox">
													<div className="otherProfile_recomBox_userInfo">
														<img></img>
														<div className="otherProfile_recomBox_Id"></div>
														<div className="otherProfile_recomBox_name"></div>
													</div>
													<div className="otherProfile_recomBox_btn"></div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="otherProfile_post_dir" role="tablist">
							<a href="/profile/" role="tab" tabindex="0">
								<span className="otherProfile_post_posts" value={posts}>
									<MdGridOn /> 게시물
								</span>
							</a>
							<a href="/profile/channel" role="tab" tabindex="0">
								<span className="otherProfile_post_video" value={video}>
									<FiPlayCircle /> 동영상
								</span>
							</a>
							<a href="/profile/saved" role="tab" tabindex="0">
								<span className="otherProfile_post_saved" value={saved}>
									<BiBookmark /> 저장됨
								</span>
							</a>
							<a href="/profile/tagged" role="tab" tabindex="0">
								<span className="otherProfile_post_tagged" value={tagged}>
									<RiAccountBoxLine /> 태그됨
								</span>
							</a>
						</div>
						<div className="otherProfile_postsBox">
							<div className="otherProfile_postList">
								<div className="otherProfile_post">
									<img src={recomtest} />
								</div>
								<div className="otherProfile_post">
									<img src={recomtest} />
								</div>
								<div className="otherProfile_post">
									<img src={recomtest} />
								</div>
								<div className="otherProfile_post">
									<img src={recomtest} />
								</div>
								<div className="otherProfile_post">
									<img src={recomtest} />
								</div>
								<div className="otherProfile_post">
									<img src={recomtest} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OtherProfile;
