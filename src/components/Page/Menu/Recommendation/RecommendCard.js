import {recomtest} from "../../../../common/IconImage";
import {bubble, recom_heart} from "../../../../common/IconImage";
import {useNavigate} from "react-router";


const RecommendCard = ({imageUrl, _id, commentCount, likeCount}) => {
  const navigate = useNavigate();
  const onePostClickHandler = () => {
    navigate(`/postdetail/${_id}`);

  }
  return(
    <>
      <div className="recommendCard" onClick={onePostClickHandler}>
        <div className="recommendImage">
        <img src={imageUrl} alt="image"/>
        </div>
        <div className="hoverRecommend">
          <img src={recom_heart} alt="likes"/> {likeCount} <img src={bubble} alt="comments_count"/> {commentCount}
        </div>


      </div>
    </>
  )
}

export default RecommendCard;