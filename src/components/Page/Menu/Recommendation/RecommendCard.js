import {recomtest} from "../../../../common/IconImage";


const RecommendCard = ({imageUrl, _id, commentCount, likeCount}) => {


  return(
    <>
      <div className="recommendCard">
        <div className="hoverRecommend">
          <a>{commentCount} {likeCount}</a></div>
        <img src={imageUrl}/>

      </div>
    </>
  )
}

export default RecommendCard;