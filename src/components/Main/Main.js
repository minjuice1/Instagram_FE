import React, { useEffect } from "react";
import PostCard from "../Post/PostCard/PostCard";
import SideMain from "./Side/SideMain";

import "./Main.scss";
import MainStory from "./MainStory/MainStory";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "../Post/PostModal/PostModal";
import { getPost } from "../../redux/post/post";
import PostLikeModal from "../Post/PostModal/PostLikeModal";

const Main = () => {
	const dispatch = useDispatch();


	const post_like_list = useSelector(state=>state.modal.likeList_modal);

	useEffect(() => {
		dispatch(getPost());
	}, [dispatch]);

	const is_modal = useSelector((state) => state.modal.is_modal);
	const post_data = useSelector((state) => state.post.posts);
	console.log(post_data);

	// 처음 홈화면에서는 댓글을 2개까지만 보여주기 때문에 댓글이 많을 경우 미리 잘라줌.
	// const get_comments = comments.slice(0-2);
	const like_modal = useSelector(state=>state.modal.likeList_modal);
	return (
		<>
			<div className="container">
				<div className="Main">
					<div className="Main_post">
						<MainStory />
						{like_modal&& <PostLikeModal/>}
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
