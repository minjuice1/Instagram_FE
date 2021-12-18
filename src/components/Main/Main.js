import React, { useEffect } from "react";
import PostCard from "../Post/PostCard/PostCard";
import SideMain from "./Side/SideMain";

import "./Main.scss";
import MainStory from "./MainStory/MainStory";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/post/post";

const Main = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPost());
	}, [dispatch]);

	const post_data = useSelector((state) => state.post.posts);
	console.log(post_data);

	return (
		<>
			<div className="container">
				<div className="Main">
					<div className="Main_post">
						<MainStory />
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
								commentCount={post.commentCount}
								isPostSaved={post.isPostSaved}
								likeCount={post.likeCount}
							/>
						))}
					</div>

					<div className="Main_side">
						<SideMain />
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
