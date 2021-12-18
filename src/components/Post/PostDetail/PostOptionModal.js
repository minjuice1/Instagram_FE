import "./PostOptionModal.scss";

const PostOptionModal = ({myId, writer, setOpenModal}) => {

	const cancleOptionClickHandler = () => {
		setOpenModal(false);
	};

	return (
		<>
    
    <div className="postDetailModal_container">
      {myId === writer ? 
      (
      <div className="postDetailModal_myId">
        <div>삭제</div>
        <div>게시물로 이동</div>
        <div onClick={cancleOptionClickHandler}>취소</div>
      </div>
      ) : (
      <div className="postDetailModal">
        <div>신고</div>
        <div>팔로우 취소</div>
        <div>게시물로 이동</div>
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

export default PostOptionModal;
