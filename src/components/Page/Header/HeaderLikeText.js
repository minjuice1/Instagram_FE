import profile from "../../../image/profile.jpg";
import React, {useEffect} from "react";

const HeaderLikeText = () => {

  return(
    <>
      <div className="like_cmt">
        <div className="like_today">오늘</div>
        <div className="like_oneCmt">
          <div><img className="nav_profile_img" src={profile}/></div>
          <div><a className="like_cmt_id">헹구</a>님이 회원님을 팔로우하기 시작했습니다.<a>3시간전</a>
            <div className="like_picture">a</div>
          </div>
        </div>
        <div className="like_oneCmt">
          <div><img className="nav_profile_img" src={profile}/></div>
          <div><a className="like_cmt_id">헹구</a>님이 회원님을 팔로우하기 시작했습니다.<a>3시간전</a>
            <div className="like_picture">a</div>
          </div>
        </div>
        <div className="like_oneCmt">
          <div><img className="nav_profile_img" src={profile}/></div>
          <div><a className="like_cmt_id">헹구</a>님이 회원님을 팔로우하기 시작했습니다.<a>3시간전</a>
            <div className="like_picture">a</div>
          </div>
        </div>
        <div className="like_oneCmt">
          <div><img className="nav_profile_img" src={profile}/></div>
          <div><a className="like_cmt_id">헹구</a>님이 회원님을 팔로우하기 시작했습니다.<a>3시간전</a>
            <div className="like_picture">a</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderLikeText;