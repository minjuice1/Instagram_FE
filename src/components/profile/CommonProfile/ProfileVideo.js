import React from "react";

import "../OtherProfile/OtherProfile.scss";
import { recomtest } from "../../../common/IconImage";

const ProfileVideo = () => {
	return (
		<>
			<div className="otherProfile_postList">
				<div className="otherProfile_post">
					<img src={recomtest} />
				</div>
				<div className="otherProfile_post">
					<img src={recomtest} />
				</div>
				<div className="otherProfile_post">
					<img src={recomtest} />
				</div>
				<div className="otherProfile_post">
					<img src={recomtest} />
				</div>
				<div className="otherProfile_post">
					<img src={recomtest} />
				</div>
				<div className="otherProfile_post">
					<img src={recomtest} />
				</div>
			</div>
		</>
	);
};

export default ProfileVideo;
