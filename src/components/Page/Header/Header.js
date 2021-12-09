import React from "react";
import "./Header.scss";
import HeaderIcon from "./HeaderIcon";
import Logo from "../../../image/InstaLogo.png";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router";
import HeaderSearch from "./HeaderSearch";


const Header = () => {
	const navigate = useNavigate();

	const LogoClickHandler = () => {
		navigate(`/main`, {replace: true})
	}

	return (
		<>
			{/*{user && (*/}
				<div className="nav_header">
					<div className="nav">
						<div className="nav_logo" onClick={LogoClickHandler}>
								<img src={Logo} alt="logo" />
						</div>
						<div className="nav_input">
							<HeaderSearch/>
						</div>
						<div className="nav_icon">
							<HeaderIcon />
						</div>
					</div>
				</div>

		</>
	);
};

export default Header;
