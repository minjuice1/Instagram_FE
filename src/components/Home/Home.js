import React, {useEffect} from "react";
import PostCard from "./Post/PostCard";
import HomeSide from "./Side/HomeSide";

import "./Home.scss";
import HomeStory from "./HomeStory/HomeStory";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../redux/post/post";



const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getPost());
  },[])


  const post_data = useSelector(state => state.post.posts);



  return(
    <>
    <div className="Main">
      <div className="Main_post">
        <HomeStory/>
        {post_data.map((post) => (
          <PostCard contents={post.contents} createdAt={post.createdAt} writer={post.writer}/>
        ))}

      </div>
      <div className="Main_side">
      <HomeSide/>
      </div>
    </div>
    </>
  )
}

export default Home;