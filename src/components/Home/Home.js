import React, {useEffect} from "react";
import PostCard from "../Post/PostCard/PostCard";
import HomeSide from "./Side/HomeSide";

import "./Home.scss";
import HomeStory from "./HomeStory/HomeStory";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../redux/post/post";
import PostModal from "../Post/PostModal/PostModal";



const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getPost());
  },[])


  const is_modal = useSelector(state => state.modal.is_modal);
  const post_data = useSelector(state => state.post.posts);


  return(
    <>
      <div className="container">
    <div className="Main">

      <div className="Main_post">
        <HomeStory/>

        {post_data.map((post) => (
          <PostCard contents={post.contents} createdAt={post.createdAt} writer={post.writer} postId={post._id}/>
        ))}
      </div>
      {is_modal&& <PostModal/>}
      <div className="Main_side">
      <HomeSide/>
      </div>

    </div>
      </div>
    </>
  )
}

export default Home;