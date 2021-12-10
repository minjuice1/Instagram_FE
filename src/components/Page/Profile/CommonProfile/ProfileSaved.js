import React from "react";

import { recomtest } from "../../../../common/IconImage";

const ProfileSaved = ({savedPost}) => {
	return (
		<>
				<div className="otherProfile_post">
					<img src={savedPost} />
				</div>
		</>
	);
};

export default ProfileSaved;
