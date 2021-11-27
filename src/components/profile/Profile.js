import { React, useState } from "react";
import "./Profile.scss";

import pp from "../../image/profile.jpg";
import { recomtest } from "../../common/IconImage";
import { FiSettings, FiPlayCircle } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import { RiAccountBoxLine } from "react-icons/ri";
import { MdGridOn } from "react-icons/md";

const Profile = () => {
	const [posts, SetPosts] = useState();
	const [video, SetVideo] = useState();
	const [saved, SetSaved] = useState();
	const [tagged, SetTagged] = useState();

	return (
		<>
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

									<FiSettings className="profile_settings" />
								</div>
								<ul className="profile_header_mid">
									<span>
										게시물 <span>10</span>
									</span>
									<span>
										팔로워 <span>555</span>
									</span>
									<span>
										팔로우 <span>999</span>
									</span>
								</ul>
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
							<a href="/profile/" role="tab" tabindex="0">
								<span className="profile_post_posts" value={posts}>
									<MdGridOn /> 게시물
								</span>
							</a>
							<a href="/profile/channel" role="tab" tabindex="0">
								<span className="profile_post_video" value={video}>
									<FiPlayCircle /> 동영상
								</span>
							</a>
							<a href="/profile/saved" role="tab" tabindex="0">
								<span className="profile_post_saved" value={saved}>
									<BiBookmark /> 저장됨
								</span>
							</a>
							<a href="/profile/tagged" role="tab" tabindex="0">
								<span className="profile_post_tagged" value={tagged}>
									<RiAccountBoxLine /> 태그됨
								</span>
							</a>
						</div>
						<div className="profile_postsBox">
							<div className="profile_postList">
								<div className="profile_post">
									<img src={recomtest} />
								</div>
								<div className="profile_post">
									<img src={recomtest} />
								</div>
								<div className="profile_post">
									<img src={recomtest} />
								</div>
								<div className="profile_post">
									<img src={recomtest} />
								</div>
								<div className="profile_post">
									<img src={recomtest} />
								</div>
								<div className="profile_post">
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

export default Profile;
