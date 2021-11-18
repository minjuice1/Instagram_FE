import React from "react";

import Footer from "../Footer/Footer";
import "./SignUp.scss";
import {
	download1,
	download2,
	instagramlogo,
	facebook_white,
} from "./LoginImage";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<>
			<div className="signup_main">
				<div className="signup_content">
					<div className="signup_signup">
						<img src={instagramlogo} alt="instagram" />
						<div className="signup_header">
							<span>친구들의 사진과 동영상을 보려면 가입하세요.</span>
						</div>
						<div className="signup_fb">
							<button>
								<img src={facebook_white} alt="fb_white" />
								<a href="https://www.facebook.com/login.php">
									Facebook으로 로그인
								</a>
							</button>
						</div>
						<div className="signup_bar">
							<hr className="left" />
							<span>또는</span>
							<hr className="right" />
						</div>
						<form>
							<input
								type="text"
								placeholder=" 휴대폰 번호 또는 이메일 주소"
							></input>
							<input type="text" placeholder=" 성명" />
							<input type="text" placeholder=" 사용자 이름" />
							<input type="password" placeholder=" 비밀번호" />
							<button>가입</button>
						</form>
					</div>
					<div className="signup_login">
						계정이 있으신가요?
						<Link className="link" to="/login">
							<span> 로그인</span>
						</Link>
					</div>
					<div className="signup_download">
						<p>앱을 다운로드하세요.</p>
						<span>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
							>
								<img src={download2} alt="download2" />
							</a>
						</span>
						<span>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://play.google.com/store/apps/details?id=com.instagram.android"
							>
								<img src={download1} alt="download1" />
							</a>
						</span>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SignUp;
