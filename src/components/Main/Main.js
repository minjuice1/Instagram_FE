import React, { useEffect, useState } from "react";
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

const Main = () => {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(getPost());
	// }, [dispatch]);

	const user_recommend = useSelector(state=> state.post.recommendedUser);
	const post_data = useSelector((state) => state.post.posts);
	const like_modal = useSelector(state=>state.modal.likeList_modal);

	// pagination
	const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(post_data);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(5);

	useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await dispatch(getPost(page));
      console.log(res);
      setPosts((prev) => [...prev, ...res.payload.posts]);
      setLoading(false);
    };

    fetchPosts();
  }, []);

	// pagination (Get current posts)
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	// console.log(currentPosts);

	// pagination (Change page)
  // const paginate = pageNumber => setCurrentPage(pageNumber);

	

	// loading spinner
	if (loading) {
    return <h2>Loading...</h2>;
  }

	return (
		<>
			<div className="container">
				<div className="Main">
					<div className="Main_post">
						<MainStory />
						{like_modal&& <PostLikeModal/>}
						{posts && posts.map((post, _id) => (
							<PostCard
								key={post._id}
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
						))}
						<Pagination
							// postsPerPage={postsPerPage}
							// totalPosts={posts.length}
							// paginate={paginate}
						/>
					</div>
					<div className="Main_side">
						<SideMain user_recommend={user_recommend}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
