import React from "react";

import "./Footer.scss";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="lst">
					<span>Meta</span>
					<span>소개</span>
					<span>블로그</span>
					<span>채용 정보</span>
					<span>도움말</span>
					<span>API</span>
					<span>개인정보처리방침</span>
					<span>약관</span>
					<span>인기 계정</span>
					<span>해시태그</span>
					<span>위치</span>
					<span>Instagram Lite</span>
				</div>
				<div className="sec">
					<span>뷰티</span>
					<span>댄스</span>
					<span>피트니스</span>
					<span>식음료</span>
					<span>집 및 정원</span>
					<span>음악</span>
					<span>시각 예술</span>
				</div>
				<div className="thd">
					<span>한국어</span>
					<span>2021 Instagram from Meta</span>
				</div>
			</div>
		</>
	);
};

export default Footer;
