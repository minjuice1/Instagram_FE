import React from "react";

import "./Footer.scss";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="lst">
					<span>
						<a href="https://about.facebook.com/meta">Meta</a>
					</span>
					<span>
						<a href="https://about.instagram.com/">소개</a>
					</span>
					<span>
						<a href="https://about.instagram.com/blog/">블로그</a>
					</span>
					<span>
						<a href="https://www.instagram.com/about/jobs/">채용 정보</a>
					</span>
					<span>
						<a href="https://help.instagram.com/">도움말</a>
					</span>
					<span>
						<a href="https://developers.facebook.com/docs/instagram">API</a>
					</span>
					<span>
						<a href="https://www.instagram.com/legal/privacy/">
							개인정보처리방침
						</a>
					</span>
					<span>
						<a href="https://www.instagram.com/legal/terms/">약관</a>
					</span>
					<span>
						<a href="https://www.instagram.com/directory/profiles/">
							인기 계정
						</a>
					</span>
					<span>
						<a href="https://www.instagram.com/directory/hashtags/">해시태그</a>
					</span>
					<span>
						<a href="https://www.instagram.com/explore/locations/">위치</a>
					</span>
					<span>
						<a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
					</span>
				</div>
				<div className="sec">
					<span>
						<a href="https://www.instagram.com/topics/beauty/">뷰티</a>
					</span>
					<span>
						<a href="https://www.instagram.com/topics/dance-and-performance/">
							댄스
						</a>
					</span>
					<span>
						<a href="https://www.instagram.com/topics/fitness/">피트니스</a>
					</span>
					<span>
						<a href="https://www.instagram.com/topics/food-and-drink/">
							식음료
						</a>
					</span>
					<span>
						<a href="https://www.instagram.com/topics/home-and-garden/">
							집 및 정원
						</a>
					</span>
					<span>
						<a href="https://www.instagram.com/topics/music/">음악</a>
					</span>
					<span>
						<a href="https://www.instagram.com/topics/visual-arts/">
							시각 예술
						</a>
					</span>
				</div>
				<div className="thd">
					<select>
						<option value="한국어">한국어</option>
						<option value="영어">English</option>
						<option value="중국어">中國語</option>
					</select>
					<span>2021 Instagram from Meta</span>
				</div>
			</div>
		</>
	);
};

export default Footer;
