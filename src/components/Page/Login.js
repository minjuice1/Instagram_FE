import React from "react";

import FindPassword from "./FindPassword";
import "./Login.scss";
import {
	login_pic1,
	login_pic2,
	download1,
	download2,
	instagram,
} from "./LoginPic";

const Login = () => {
	return (
		<>
			<div className="all">
				<section className="side_img">
					<img src={login_pic1} alt="login_pic1" />
					{/* <img src={login_pic2} alt="login_pic2" /> */}
				</section>
				<section className="main">
					<div className="login">
						<img src={instagram} alt="instagram" />
						<form>
							<input value=" 전화번호, 사용자 이름 또는 이메일" />
							<input type="password" value=" 비밀번호" />
							<button>로그인</button>
						</form>
						<div>
							<h5>-또는-</h5>
						</div>
						<div>Facebook으로 로그인</div>
						<button>비밀번호를 잊으셨나요?</button>
					</div>
					<div className="signup">
						계정이 없으신가요?
						<span>가입하기</span>
					</div>
					<div className="download">
						<h5>앱을 다운로드하세요.</h5>
						<img src={download1} alt="download1" />
						<img src={download2} alt="download2" />
					</div>
				</section>
			</div>
		</>
	);
};

export default Login;
