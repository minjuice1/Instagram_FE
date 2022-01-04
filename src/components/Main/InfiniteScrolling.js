import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../redux/post/post';

export default function InfiniteScrolling(pageNumber) {

  const dispatch = useDispatch();
  const post_data = useSelector((state) => state.post.posts);

  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await dispatch(getPost(post_data));
      console.log(res);
      setPosts((prevPosts) => [...prevPosts, ...res.payload.posts]);
      setHasMore(res.payload.posts.length > 0)
      setLoading(false);
    };

    fetchPosts();
  }, [pageNumber])

  return { loading, posts, hasMore, postsPerPage }
}