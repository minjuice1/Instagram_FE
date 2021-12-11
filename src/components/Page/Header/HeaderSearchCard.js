import {useEffect} from "react";
import {useSelector} from "react-redux";
import {none_profile} from "../../../common/IconImage";
import "./Header.scss"
import {useNavigate} from "react-router";

const HeaderSearchCard = ({name, userId, profileImage, tagName, postCount}) => {

  const navigate = useNavigate();

  const searchUserClickHandler = () => {
    const id = userId;
    navigate(`/profile/${id}`,{state: id});
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

        {tagName && <div>{tagName} {postCount}</div>}
      </div>
    </>
  )
}

export default HeaderSearchCard;