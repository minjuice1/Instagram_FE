import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {
	login_pic2,
  login_pic3,
  login_pic4,
  login_pic5,
  login_pic6,

} from "./LoginImage";


 const Fade = () => {

    const settings = {
      fade: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={login_pic2} alt="login_pic2"/>
          </div>
          <div>
            <img src={login_pic3} alt="login_pic3"/>
          </div>
          <div>
            <img src={login_pic4} alt="login_pic4"/>
          </div>
          <div>
            <img src={login_pic5} alt="login_pic5"/>
          </div>
          <div>
            <img src={login_pic6} alt="login_pic5"/>
          </div>
        </Slider>
      </div>
    );
}

export default Fade;