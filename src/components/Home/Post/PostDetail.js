import React from "react";
import "./PostDetail.scss";
import { login_pic2 } from "../../Page/Login/LoginImage";

const PostDetail = () => {
	return (
		<>
			<div className="postDetail_content_all">
				<div className="postDetail_content">
					<div className="postDetail_Box">
						<div className="postDetail_imgBox">
							<div className="postDetail_img">
								<img src={login_pic2} alt="instagram"></img>
							</div>
						</div>
						<div className="postDetail_commentBox">
							<div className="postDetail_header">
								<div></div>
								<div></div>
							</div>
							<div className="postDetail_comment">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default PostDetail;
