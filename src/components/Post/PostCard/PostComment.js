import "./PostCard.scss";
import React, { useState } from 'react';
import InputEmoji from "react-input-emoji";
const PostComment = () => {

  const [postComment, SetPostComment] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return(
    <>
      <form>
      <div className="post_cmt">
        <InputEmoji className="react-emoji"
        borderColor="white"
        placeholder="댓글 달기.."
        value={postComment}
        fontSize="14">

        </InputEmoji>
        <a className="comment_submit">게시</a>
      </div>
      </form>
    </>
  )
}

export default PostComment;