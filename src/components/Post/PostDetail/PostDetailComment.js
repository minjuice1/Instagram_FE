import React, {useState} from "react";
import { useSelector } from "react-redux";
import {comment_heart, comment_red_heart} from "../../../common/IconImage";

// postDetail과 css공유
import "./PostDetail";

const PostDetailComment = ({contents, date, like, writer}) => {

  return(
    <>
    <div className="postDetail_comment_userId">
      <span>{writer}</span>
      <span>
        {contents}
      </span>
    </div>
    <div className="postDetail_comment_info">
      <span>{date}</span>
      {like.length !== 0 && (<span>
        좋아요 <span>{like}</span>개
      </span>)}
      
      <span>답글 달기</span>
    </div>
  </>
  )
}

export default PostDetailComment;