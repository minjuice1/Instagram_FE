import React, {useState} from "react";
import PostDetailReplyCommentModal from './PostDetailReplyCommentModal';

// postDetail과 css공유
import pp from "../../../image/profile.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";


const PostReplyComment = ({Recontents, RecreatedAt, Relike, Rewriter, ReCommentId, postId, Id}) => {  

  // modal
  const [openModal, setOpenModal] = useState(false); 
  const show_postModal = () => {
		setOpenModal(true);
	};

    //글쓴 시간 계산. ex) 방금전, 몇분전 으로 표시하기 위해 사용함.
    function displayTime(value) {
      const today = new Date();
      const nowTime = new Date(value);
  
      const displayTime = Math.floor(
        (today.getTime() - nowTime.getTime()) / 1000 / 60,
      );
      if (displayTime < 1) return "방금전";
      if (displayTime < 60) {
        return `${displayTime}분전`;
      }
  
      const displayTimeHour = Math.floor(displayTime / 60);
      if (displayTimeHour < 24) {
        return `${displayTimeHour}시간전`;
      }
  
      const displayTimeDay = Math.floor(displayTime / 60 / 24);
      if (displayTimeDay < 365) {
        return `${displayTimeDay}일전`;
      }
  
      return `${Math.floor(displayTimeDay / 365)}년전`;
    }
  
    const time = displayTime(RecreatedAt);

  return(
  <>
  {openModal && <PostDetailReplyCommentModal Id={Id} setOpenModal={setOpenModal} Recontents={Recontents} postId={postId} RecommentId={ReCommentId}/>}
  {Recontents && 
  <div className="postDetail_replyComments">
    <div className="postDetail_replyComment_pp">
      <img src={pp} alt="pp" />
    </div>
    <div className="postDetail_replyComments_comment">
      <div className="postDetail_replyComment_userId">
        <span>{Rewriter}</span>
        <span className="postDetail_replyComment_contents">
          {Recontents}
        </span>
      </div>
      <div className="postDetail_replyComment_info">
        <span>{time}</span>
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