import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deletePost } from '../../../redux/post/post';
import "../PostDetail/PostOptionModal";

const PostBoardOptionModal = ({postId, myId, writer, setOpenModal}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteClickHandler = () => {
    dispatch(
     deletePost({
        postId,
      }))
		setOpenModal(false);
  };

	const cancleOptionClickHandler = () => {
		setOpenModal(false);
	};

  // postBoard 로
  const toPostBoardHandler = () => {
    navigate(`/postboard/${postId}`);
  }

	return (
		<>
    <div className="postDetailModal_container">
      {myId === writer ? 
      (
      <div className="postBoardModal_myId">
        <div onClick={deleteClickHandler}>삭제</div>
        <div onClick={cancleOptionClickHandler}>취소</div>
      </div>
      ) : (
      <div className="postDetailModal">
        <div>신고</div>
        <div>팔로우 취소</div>
        <div>태그된 계정</div>
        <div>공유 대상...</div>
        <div>링크 복사</div>
        <div>퍼가기</div>
        <div onClick={cancleOptionClickHandler}>취소</div>
      </div>
      )}
    </div>
		<div className="postDetailModal_overlay"  onClick={cancleOptionClickHandler}></div>
		</>
	);
};

export default PostBoardOptionModal;
