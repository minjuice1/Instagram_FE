import React from "react";
import {bubble, recom_heart} from "../../../../common/IconImage";
import {useNavigate} from "react-router";

const SearchHashCard = ({posts}) => {
  const navigate = useNavigate();

  const postClickHandler = () => {
    navigate(`/postdetail/${posts._id}`);
  }


  console.log(posts)
  return (
    <>
      <div className="otherProfile_post" onClick={postClickHandler}>

      <div className="recommendCard" >
        <div className="recommendImage">
          <img src={posts.imageUrl} alt="image"/>
        </div>
        <div className="hoverRecommend">
          <img src={recom_heart} alt="likes"/> {posts.likeCount} <img src={bubble} alt="comments_count"/> {posts.commentCount}
        </div>
      </div>


      </div>
    </>
  );
};

export default SearchHashCard;
