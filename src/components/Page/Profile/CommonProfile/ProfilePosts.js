import React from "react";
import { Link } from 'react-router-dom';
import "./CommonProfile.scss";

const ProfilePosts = ({list, category}) => {
  console.log(list);
  return (
    <>
    <Link to={`/postdetail/${list._id}`}>
      <div className="otherProfile_post">
        <img src={list.imageUrl}/>
      </div>
    </Link>
    </>
  );
};

export default ProfilePosts;
