import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { replyReducer } from '../../../redux/post/postSlice';
import PostDetailReplyCommentModal from './PostDetailReplyCommentModal';

// postDetail과 css공유
import pp from "../../../image/profile.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";


const PostReplyComment = ({Recontents, RecreatedAt, Relike, Rewriter, ReCommentId, postId}) => {  

  // modal
  const [openModal, setOpenModal] = useState(false); 
  const show_postModal = () => {
    console.log(ReCommentId);
		setOpenModal(true);
	};

  return(
  <>
  {openModal && <PostDetailReplyCommentModal setOpenModal={setOpenModal} Recontents={Recontents} postId={postId} RecommentId={ReCommentId}/>}
  {Recontents && 
  <div className="postDetail_comments">
    <div className="postDetail_comment_pp">
      <img src={pp} alt="pp" />
    </div>
    <div className="postDetail_comments_comment">
      <div className="postDetail_comment_userId">
        <span>{Rewriter}</span>
        <span className="postDetail_comment_contents">
          {Recontents}
        </span>
      </div>
      <div className="postDetail_comment_info">
        <span>{RecreatedAt}</span>
        {Relike !== 0 && (<span>
          좋아요 <span>{Relike}</span>개
        </span>)}
        <span>답글 달기</span>
        <span onClick={show_postModal}><BiDotsHorizontalRounded size={15} lineHeight={10}/></span>
      </div>
    </div>
  </div>}
  </>
  )
}

export default PostReplyComment;