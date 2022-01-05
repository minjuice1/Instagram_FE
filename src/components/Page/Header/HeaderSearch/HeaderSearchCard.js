import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {none_profile, hash_icon} from "../../../../common/IconImage";
import "../Header.scss"
import {useNavigate} from "react-router";

const HeaderSearchCard = ({name, userId, profileImage, tagName, postCount}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //유저 검색했을 경우
  const searchUserClickHandler = () => {
    const id = userId;
    navigate(`/profile/${id}`,{state: id});
  }
  const hashSearchResultClickHandler = () => {
    navigate(`/searchhash/${tagName}`, {state: tagName, replace: true});
  }

  return (
    <>

      <div className="header_search_card">
        {/*유저정보 검색했을 때 보이는 카드*/}
        {name &&
        <div className="header_search_user" onClick={searchUserClickHandler}>
          {profileImage?   <img src={profileImage}/> : <img src={none_profile}/>}
          <div>
            <a>{userId}<br/></a>
            <a>{name}</a>
          </div>
        </div>
        }

        { tagName &&
        <div className="header_search_hash" onClick={hashSearchResultClickHandler}>
          <div><img src={hash_icon} alt="hash_icon"/></div>
          <div>
            <a>{tagName}<br/></a> <a>게시물 {postCount}</a>
          </div>
        </div>}
      </div>
    </>
  )
}

export default HeaderSearchCard;