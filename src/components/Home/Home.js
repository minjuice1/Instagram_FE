import React from "react";
import PostCard from "./Post/PostCard";
import HomeSide from "./Side/HomeSide";

import "./Home.scss";


const Home = () => {

  return(
    <>
    <div className="Main">
      <div className="Main_post">
      <PostCard/>
      </div>
      <div className="Main_side">
      <HomeSide/>
      </div>
    </div>
    </>
  )
}

export default Home;