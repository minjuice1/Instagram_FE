import test_image from "../../../../image/hash_test_image.png";
import "./_SearchHash.scss";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router";
import {hashFollow, SearchHashResult} from "../../../../redux/search/search";
import ProfilePosts from "../../Profile/CommonProfile/ProfilePosts";
import SearchHashCard from "./SearchHashCard";


const SearchHash = () => {
  const dispatch = useDispatch();
  const location = useLocation();


  //주소에서 검색할 해쉬태그를 나눠준다.
  const current = decodeURI(window.location.href);
  const search = current.split("searchhash/")[1];
  let HashResult = search && search.replace('#', '%23');
  const hash_result = useSelector(state=>state.search.posts);
  const hash_tag = useSelector(state=>state.search.searchHashtag);

  console.log(hash_tag)

  const [hashTag, SetHashTag] = useState(false);
  useEffect(() => {
    dispatch(SearchHashResult({
      HashResult
    }))
    if(hash_tag.isFollow){
      SetHashTag(true);
    }else{
      SetHashTag(false);
    }
  },[dispatch,location])




  const hashTagFollowClickHandler = () => {
    dispatch(hashFollow({
      HashResult
    }))
    SetHashTag(hashTag => !hashTag);
  }

  return(
    <>
      <div className="container">
      <div className="search_hash">
        <div className="search_hash_header">
          <img src={test_image} alt="search_hashtag"/>
          <div>
            <div>{hash_tag.hashtag}</div>
            <div>게시물 <a>{hash_tag.postCount}</a></div>
            {hashTag ?  <button className="following_button" onClick={hashTagFollowClickHandler}>팔로잉</button> :
              <button className="follow_button_style" onClick={hashTagFollowClickHandler}>팔로우</button>}
           
          </div>

        </div>

        <div className="hash_posts">
          <div className="hash_post_result">
          {hash_result && hash_result.map((posts) => (
            <SearchHashCard
           posts={posts}/>
          ))}
          </div>

        </div>
      </div>
      </div>
    </>
  )
}

export default SearchHash;