import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { replyReducer } from '../../../redux/post/postSlice';

// postDetail과 css공유
import pp from "../../../image/profile.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";




const PostReplyComment = ({like, writer}) => {

  const dispatch = useDispatch();

    // 대댓글
  const [clickReply, setClickReply] = useState(false);

  const ReplyClickHandler = () => {
    setClickReply(!clickReply);
  }
  
  return(
  <>
  {clickReply ?
    (<div  onClick={ReplyClickHandler}>
      <div className="postDetail_replycomment"> ㅡ 답글 숨기기 </div>
      <div className="postDetail_comments">
        <div className="postDetail_comment_pp">
          <img src={pp} alt="pp" />
        </div>
        <div className="postDetail_comments_comment">
          <div className="postDetail_comment_userId">
            <span>writer</span>
            <span className="postDetail_comment_contents">
              contents
            </span>
          </div>
          <div className="postDetail_comment_info">
            <span>date</span>
            {like !== 0 && (<span>
              좋아요 <span>{like.length}</span>개
            </span>)}
            <span>답글 달기</span>
            <span><BiDotsHorizontalRounded size={15} lineHeight={10}/></span>
          </div>
        </div>
      </div>
      </div>)
    : (<div  onClick={ReplyClickHandler}>
        <div className="postDetail_replycomment"> ㅡ 답글보기 (<span>3</span>개)
        </div>
      </div>)}
  </>
  )
}

export default PostReplyComment;