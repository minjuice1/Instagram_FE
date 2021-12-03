import { useDispatch } from "react-redux";
import { postDetailComment_modal } from "../../../redux/modal/modalSlice";
import { deleteComment } from '../../../redux/post/comment';
import "./PostDetailCommentModal.scss";

const PostDetailModal = ({postId, commentId}) => {
	const dispatch = useDispatch();
	const AccessToken = localStorage.getItem("user");

	const cancleClickHandler = () => {
		dispatch(postDetailComment_modal());
	};

	
	const deleteClickHandler = (event) => {
    dispatch(
			deleteComment({
				postId,
        commentId,
				AccessToken,
      }))
			cancleClickHandler();
			console.log(commentId);
			
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

export default PostDetailModal;
