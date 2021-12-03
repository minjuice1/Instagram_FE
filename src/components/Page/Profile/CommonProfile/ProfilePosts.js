import React from "react";
import "./CommonProfile.scss";

import {recomtest} from "../../../../common/IconImage";

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
