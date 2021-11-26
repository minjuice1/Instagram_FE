import "./PostCard.scss";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { comment } from "../../../redux/comment/comment";

import InputEmoji from "react-input-emoji";
const PostComment = (postId) => {
	const dispatch = useDispatch();

  const [postComment, SetPostComment] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return(
    <>
      <form>
      <div className="post_cmt">
        <InputEmoji
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