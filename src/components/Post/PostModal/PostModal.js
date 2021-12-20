import { useDispatch } from 'react-redux';
import { deletePost } from '../../../redux/post/post';
import "./PostModal.scss";

const PostModal = ({myId, writer, setOpenModal, postId}) => {

	const dispatch = useDispatch();

	const cancleClickHandler = () => {
		setOpenModal(false);
	};

	const deleteClickHandler = () => {
    dispatch(
     deletePost({
        postId,
      }))
		setOpenModal(false);
  };

	return (
		<>
			<div className="post_modal_container">
			{myId === writer ? (
				<div className="post_modal_myId">
        <div onClick={deleteClickHandler}>삭제</div>
        <div>게시물로 이동</div>
        <div onClick={cancleClickHandler}>취소</div>
      </div>
			) : (
				<div className="post_modal">
				<div>신고</div>
				<div>팔로우 취소</div>
				<div>게시물로 이동</div>
				<div>공유 대상...</div>
				<div>링크 복사</div>
				<div>퍼가기</div>
				<div onClick={cancleClickHandler}>취소</div>
			</div>
			)}
			</div>
			<div className="postModal_overlay" onClick={cancleClickHandler}></div>
		</>
	);
};

export default PostModal;
