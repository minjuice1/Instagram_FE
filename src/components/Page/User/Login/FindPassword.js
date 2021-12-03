import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../Footer/Footer";
import "./FindPassword.scss";
import { lock } from "../../../../common/LoginImage";

const FindPassword = () => {
	return (
		<>
			<div className="all_content">
				<div className="pwd_main">
					<div className="pwd_content">
						<div className="pwd_top">
							<div className="pwd_title">
								<img src={lock} alt="fb_white" />
								<h4>로그인에 문제가 있나요?</h4>
								<div>
									이메일 주소, 전화번호 또는 사용자 이름을 입력하시면 계정에
									다시 액세스할 수 있는 링크를 보내드립니다.
								</div>
							</div>
							<form>
								<input
									type="text"
									placeholder=" 이메일, 전화번호, 사용자이름"
								></input>
								<button>로그인 링크 보내기</button>
							</form>
							<div className="pwd_bar">
								<hr className="left" />
								<span>또는</span>
								<hr className="right" />
							</div>
							<Link className="link" to="/accounts/signup">
								<div className="pwd_newAccount">새 계정 만들기</div>
							</Link>
						</div>
						<div className="pwd_backToLogin">
							<Link className="link" to="/login">
								<span> 로그인으로 돌아가기</span>
							</Link>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default FindPassword;
