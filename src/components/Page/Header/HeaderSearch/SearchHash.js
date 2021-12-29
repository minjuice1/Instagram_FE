import test_image from "../../../../image/hash_test_image.png";
import "./_SearchHash.scss";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router";
import {hashFollow, SearchHashResult} from "../../../../redux/search/search";
import ProfilePosts from "../../Profile/CommonProfile/ProfilePosts";


const SearchHash = () => {
  const dispatch = useDispatch();
  const location = useLocation();


  //주소에서 검색할 해쉬태그를 나눠준다.
  const current = decodeURI(window.location.href);
  const search = current.split("searchhash/")[1];
  let HashResult = search && search.replace('#', '%23');

  useEffect(()=>{
    dispatch(SearchHashResult({
      HashResult
    }))
  },[dispatch,location])


  const hash_result = useSelector(state=>state.search.posts);
  const hash_tag = useSelector(state=>state.search.searchHashtag);



  const hashTagFollowClickHandler = () => {
    dispatch(hashFollow({
      HashResult
    }))
  }

  return(
    <>
      <div className="search_hash">
        <div className="search_hash_header">
          <img src={test_image} alt="search_hashtag"/>
          <div>
            <div>{hash_tag.hashtag}</div>
            <div>게시물 <a>{hash_tag.postCount}</a></div>
            {hash_tag && hash_tag.isFollow ?  <button onClick={hashTagFollowClickHandler}>팔로잉</button> :
              <button onClick={hashTagFollowClickHandler}>팔로우</button>}
           
          </div>

        </div>

        <div className="hash_posts">
          {hash_result && hash_result.map((posts) => (
            <ProfilePosts
            commentCount={posts.commentCount}
            imageUrl={posts.imageUrl}
            likeCount={posts.likeCount}
            _id={posts._id}/>
          ))}

        </div>
      </div>

    </>
  )
}

export default SearchHash;