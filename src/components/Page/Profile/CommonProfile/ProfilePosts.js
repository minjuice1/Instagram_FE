import React from "react";
import "./CommonProfile.scss";

const ProfilePosts = ({list, category}) => {
  return (
    <>
      <div className="otherProfile_post">
        <img src={list.imageUrl}/>
      </div>
    </>
  );
};

export default ProfilePosts;
