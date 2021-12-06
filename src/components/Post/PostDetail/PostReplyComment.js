import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { replyReducer } from '../../../redux/post/postSlice';

// postDetail과 css공유
import pp from "../../../image/profile.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const PostReplyComment = ({contents, createdAt, like, writer}) => {  
  console.log(contents);

  return(
  <>
  {contents && 
  <div className="postDetail_comments">
    <div className="postDetail_comment_pp">
      <img src={pp} alt="pp" />
    </div>
    <div className="postDetail_comments_comment">
      <div className="postDetail_comment_userId">
        <span>{writer}</span>
        <span className="postDetail_comment_contents">
          {contents}
        </span>
      </div>
      <div className="postDetail_comment_info">
        <span>{createdAt}</span>
        {like !== 0 && (<span>
          좋아요 <span>{like}</span>개
        </span>)}
        <span>답글 달기</span>
        <span><BiDotsHorizontalRounded size={15} lineHeight={10}/></span>
      </div>
    </div>
  </div>}
  </>
  )
}

export default PostReplyComment;