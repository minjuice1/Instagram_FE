import test_image from "../../../image/hash_test_image.png";
import "./_SearchHash.scss";


const SearchHash = () => {


  return(
    <>
      <div className="search_hash">
        <div className="search_hash_header">
          <img src={test_image} alt="search_hashtag"/>
          <div>
            <div>#잠죽자</div>
            <div>게시물 <a>984</a></div>
            <button>팔로우</button>
          </div>

        </div>

      </div>

    </>
  )
}

export default SearchHash;