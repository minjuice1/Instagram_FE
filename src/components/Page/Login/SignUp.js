import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import Footer from "../Footer/Footer";
import "./SignUp.scss";
import {download1, download2, instagramlogo, facebook_white,} from "./LoginImage";
import {BiXCircle, BiCheckCircle} from "react-icons/bi";
import {FiRotateCw} from "react-icons/fi";
import {singUp} from "../../../redux/user/user";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, SetEmail] = useState();
  const [name, SetName] = useState();
  const [userId, SetUserId] = useState();
  const [password, SetPassword] = useState();



  const SingUpClickHandler = () => {

    console.log(email, name, userId, password);
		dispatch(singUp({
		email, name, userId, password
		}), [dispatch])
    navigate("/login");
	}

	const EmailOnChange = (e) => {
		SetEmail(e.target.value)};
	const NameOnChange = (e) => {
		SetName(e.target.value)};
	const UserIdOnChange = (e) => {
		SetUserId(e.target.value)};
	const PassWordOnChange = (e) => {
		SetPassword(e.target.value)};

  //
  // if (.indexOf("@")) {
  //   console.log("골뱅인인")
  // }

  return (
    <>
			<div className="signup_main">
        <div className="signup_content">
          <div className="signup_signup">
            <img src={instagramlogo} alt="instagram"/>
            <div className="signup_header">
              <span>친구들의 사진과 동영상을 보려면 가입하세요.</span>
            </div>
            <div className="signup_fb">
              <button>
                <img src={facebook_white} alt="fb_white"/>
                <a href="https://www.facebook.com/login.php">
                  Facebook으로 로그인
                </a>
              </button>
            </div>
            <div className="signup_bar">
              <hr className="left"/>
              <span>또는</span>
              <hr className="right"/>
            </div>
            <div className="signup_form">
              <div className="signup_label_email_form">
                <label className="signup_label_email">
                  <span>휴대폰 번호 또는 이메일 주소</span>
                  <input
                    className="signup_email"
                    type="email" value={email} onChange={EmailOnChange}/>
                </label>
                <div>
                  <span className="signup_email_check"><BiXCircle color={"#F04756"} size={25}/></span>
                </div>
              </div>
              <div className="signup_label_name_form">
                <label className="signup_label_name">
                  <span>성명</span>
                  <input
                    className="signup_name"
                    type="text" value={name} onChange={NameOnChange}/>
                </label>
                <div>
                  <span className="signup_name_check"><BiCheckCircle color={"#c7c7c7"} size={25}/></span>
                </div>
              </div>
              <div className="signup_label_username_form">
                <label className="signup_label_username">
                  <span>사용자 이름</span>
                  <input
                    className="signup_username"
                    type="text" value={userId} onChange={UserIdOnChange}/>
                </label>
                <div>
                  <span className="signup_username_check"><BiXCircle color={"#F04756"} size={25}/></span>
                  <div>
                    <button className="signup_username_check_btn"><FiRotateCw color={"#0095f6"} size={24}/></button>
                  </div>
                </div>
              </div>
              <div className="signup_label_pwd_form">
                <label className="signup_label_pwd">
                  <span>비밀번호</span>
                  <input
                    className="signup_pwd"
                    type="password" value={password} onChange={PassWordOnChange}/>
                </label>
                <div className="signup_pwd_check_form">
                  <span><BiCheckCircle color={"#c7c7c7"} size={25}/></span>
                  <div>
                    <button className="signup_pwd_check">비밀번호 표시</button>
                  </div>
                </div>
              </div>
              <button onClick={SingUpClickHandler}>가입</button>
            </div>
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
								<img src={download2} alt="download2"/>
							</a>
						</span>
            <span>
							<a
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps/details?id=com.instagram.android"
              >
								<img src={download1} alt="download1"/>
							</a>
						</span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignUp;
