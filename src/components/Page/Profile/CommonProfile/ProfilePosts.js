import React from "react";
import "./CommonProfile.scss";

const ProfilePosts = ({picture}) => {
  return (
    <>
      <div className="otherProfile_post">
        <img src={picture}/>
      </div>
    </>
  );
};

export default ProfilePosts;
