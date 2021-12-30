import React from "react";
import "./CommonProfile.scss";

const ProfilePosts = ({picture, imageUrl}) => {
  return (
    <>
      <div className="otherProfile_post">
        {picture && <img src={picture}/>}
        {imageUrl && <img src={imageUrl}/>}
      </div>
    </>
  );
};

export default ProfilePosts;
