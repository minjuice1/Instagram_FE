import { useDispatch } from "react-redux";
import { deleteReplyComment } from '../../../redux/post/comment';
import "./PostDetailCommentModal.scss";

const PostDetailReplyCommentModal = ({postId, RecommentId, setOpenModal, Recontents, Id}) => {
	const dispatch = useDispatch();
	const AccessToken = localStorage.getItem("user");

	const cancleClickHandler = () => {
		setOpenModal(false);
	};

	const deleteClickHandler = () => {
    dispatch(
			deleteReplyComment({
				postId,
        commentId: RecommentId,
				AccessToken,
				Id,
      }))
      console.log(RecommentId);
			cancleClickHandler();			
  };

  
	return (
		<>
			<div className="profile_modal_container">
				<div className="postDetailComment_modal_modal">
					<div>신고</div>
					<div onClick={deleteClickHandler}>삭제</div>
					<div onClick={cancleClickHandler}>취소</div>
				</div>
			</div>
			<div className="postDetailComment_modal_overlay" onClick={cancleClickHandler}></div>
		</>
	);
};

export default PostDetailReplyCommentModal;