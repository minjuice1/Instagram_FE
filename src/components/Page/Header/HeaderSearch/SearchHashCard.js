import React from "react";
import {bubble, recom_heart} from "../../../../common/IconImage";
import {useNavigate} from "react-router";
import "./_SearchHash.scss"

const SearchHashCard = ({posts}) => {
  const navigate = useNavigate();

  const postClickHandler = () => {
    navigate(`/postdetail/${posts._id}`);
  }


  console.log(posts)
  return (
    <>

      <div className="result_hash" onClick={postClickHandler}>
        <div className="result_hash_image">
          <img src={posts.imageUrl} alt="image"/>
        </div>
        <div className="result_hash_hover">
          <img src={recom_heart} alt="likes"/> {posts.likeCount} <img src={bubble} alt="comments_count"/> {posts.commentCount}
        </div>
      </div>
    </>
  );
};

export default SearchHashCard;
