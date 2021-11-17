import React from "react";

import Footer from "../Footer/Footer";
import "./Login.scss";
import {
	login_pic1,
	login_pic2,
	download1,
	download2,
	instagramlogo,
	facebook,
} from "./LoginImage";

const Login = () => {
	return (
		<>
			<div className="all">
				<section className="side_img">
					<img src={login_pic1} alt="login_pic1" />
					{/* <img src={login_pic2} alt="login_pic2" /> */}
				</section>
				<section className="login_main">
					<div className="login">
						<img src={instagramlogo} alt="instagram" />
						<div className="login_user">
							<label>
								<span>전화번호, 사용자 이름 또는 이메일</span>
								<input
									aria-label="전화번호, 사용자 이름 또는 이메일"
									aria-required="true"
									autoCapitalize="off"
									autoCorrect="off"
									name="username"
									type="text"
								></input>
							</label>
						</div>
						<div className="login_pwd">
							<label>
								<span>비밀번호</span>
								<input
									aria-label="비밀번호"
									aria-required="true"
									autoCapitalize="off"
									autoCorrect="off"
									name="password"
									type="password"
								/>
								<div className="check_pwd">
									<button>비밀번호 표시</button>
								</div>
							</label>
						</div>
						<div className="login_btn">
							<button type="submit">로그인</button>
						</div>
						<div className="login_bar">
							<hr className="left" />
							<span>또는</span>
							<hr className="right" />
						</div>
						<div className="fb">
							<span>
								<img src={facebook} alt="fb" />
								<a href="https://www.facebook.com/login.php">
									Facebook으로 로그인
								</a>
							</span>
						</div>
						<div class="findPw">
							<button>비밀번호를 잊으셨나요?</button>
						</div>
					</div>
					<div className="login_signup">
						계정이 없으신가요?
						<span> 가입하기</span>
					</div>
					<div className="download">
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
				</section>
			</div>
			<Footer />
		</>
	);
};

export default Login;
