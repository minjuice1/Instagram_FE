import React, { useCallback, useEffect, useRef, useState } from "react";
import PostCard from "../Post/PostCard/PostCard";
import SideMain from "./Side/SideMain";

import "./Main.scss";
import MainStory from "./MainStory/MainStory";
import { useDispatch, useSelector } from "react-redux";
import PostModal from "../Post/PostModal/PostModal";
import { getPost } from "../../redux/post/post";
import PostLikeModal from "../Post/PostModal/PostLikeModal";
import Pagination from '../PostCommon/Pagination';
import {getProfile} from "../../redux/user/user";
import { useInView } from "react-intersection-observer"
import InfiniteScrolling from './InfiniteScrolling';

const Main = () => {
	const dispatch = useDispatch();

	const user_recommend = useSelector(state=> state.post.recommendedUser);
	const post_data = useSelector((state) => state.post.posts);
	const like_modal = useSelector(state=>state.modal.likeList_modal);

	// pagination
	const [page, setPage] = useState(1);
	const {posts,hasMore,loading,} = InfiniteScrolling(page);

	const observerRef = useRef();

	const observer = (node) => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(entries => {
			console.log(entries);
      if (entries.isIntersecting && hasMore) {
        setPage((page) => page + 1)
				console.log(setPage);
      }
    });
		node && observerRef.current.observe(node);
  };

	return (
		<>
			<div className="container" >
				<div className="Main">
					<div className="Main_post">
						<MainStory />
						{like_modal&& <PostLikeModal/>}
						{posts && posts.map((post, index) => {
									<PostCard
										key={index}
										contents={post.contents}
										createdAt={post.createdAt}
										writer={post.writer}
										postId={post._id}
										postImage={post.imageUrl}
										isLike={post.isLike}
										likeCount={post.likeCount}
										comments={post.comments}
										commentIsAllowed={post.commentIsAllowed}
										commentCount={post.commentCount}
										isPostSaved={post.isPostSaved}
										likeCount={post.likeCount}
									/>
						})}
					</div>
					<div className="Main_side">
						<SideMain user_recommend={user_recommend}/>
					</div>
				</div>
				<div ref={observer}/>
			</div>
			<div>{loading && 'Loading...'}</div>
		</>
	);
};

export default Main;
