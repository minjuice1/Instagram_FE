import React, { useEffect } from "react";
import PostCard from "../Post/PostCard/PostCard";
import HomeSide from "./Side/HomeSide";

import "./Home.scss";
import HomeStory from "./HomeStory/HomeStory";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "../Post/PostModal/PostModal";
import { getPost } from "../../redux/post/post";

const Home = () => {
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(getPost());
	}, [dispatch]);

	const is_modal = useSelector((state) => state.modal.is_modal);
	const post_data = useSelector((state) => state.post.posts);


	return (
		<>
			<div className="container">
				<div className="Main">
					<div className="Main_post">
						<HomeStory />
						{post_data && post_data.map((post) => (
							<PostCard
								contents={post.contents}
								createdAt={post.createdAt}
								writer={post.writer}
								postId={post._id}
								postImage={post.imageUrl}
								isLike={post.isLike}
								comments={post.comments}
								commentIsAllowed={post.commentIsAllowed}
							/>
						))}
					</div>

					<div className="Main_side">
						<HomeSide />
					</div>
					{is_modal && <PostModal />}
				</div>
			</div>
		</>
	);
};

export default Home;
