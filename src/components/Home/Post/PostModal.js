import "./PostModal.scss";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {modal_check} from "../../../redux/modal/modalSlice";


const PostModal = () => {
  const dispatch = useDispatch();

  const cancleClickHandler = () => {

    dispatch(modal_check());
  }

  return(
    <>
      <div className ="post_modal_container">
      <div className="post_modal">
        <div>신고</div>
        <div>팔로우 취소</div>
        <div>게시물로 이동</div>
        <div>공유 대상...</div>
        <div>링크 복사</div>
        <div>퍼가기</div>
        <div onClick={cancleClickHandler}>취소</div>
      </div>
      </div>
      <div className="overlay" onClick={cancleClickHandler}>

      </div>

    </>
  )
}

export default PostModal;