import React from "react";
import "./PostCard.scss";

import {heart, message, text, dot} from "../../../common/IconImage";

import Profile_image from "../../../image/profile.jpg";
import Picture from "../../../image/picture.png";


const PostCard = () => {

  return (
    <>
      <div className="post_cards">
        <div className="post_card">
          <div className="post_header">
            <div className="profile_img">
              <img src={Profile_image}/>
              <div>hyemgu</div>
              <div className="profile_img_dot"><img src={dot}/></div>
            </div>
            <div className="profile_center">
              <img src={Picture}/>
            </div>
            <div className="post_icon">
              <div className="footer_icon">
              <img src={heart}/>
              <img src={text}/>
              <img src={message}/>
              </div>
              <div className="footer_collection">
                <img src={message}/>
              </div>
            </div>
            <div className="post_content">
              <div>좋아요 1,200개</div>
              <div>아이디 여러분,,, 아아아아아아아아아 <span>더보기</span></div>
              <div>댓글 122개 모두 보기</div>
            </div>
            <div className="post_comment">
              <div><a>hyemin085</a> 아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ <a>♡</a></div>
              <div><a>hyemin085</a> 오ㅗㅗㅗㅗㅗㅗㅗ <a>♡</a></div>
              <div className="post_time">4시간 전</div>
            </div>
            <div className="post_cmt">
              <input placeholder="댓글 달기.."/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCard;