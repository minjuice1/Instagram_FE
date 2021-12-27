// postCard css 공유
import { useNavigate } from 'react-router';
import "../../../common/_bookmarkToast.scss";

const PostBookmarkToast = ({bookmarkToast, postId}) => {

  const navigate = useNavigate();

  // postBoard 로
  const toPostBoardHandler = () => {
    navigate(`/postboard/${postId}`);
  }

  return(
    <>
    {bookmarkToast &&
      <div className="bookmark_popup">
        <span>항목이 저장되었습니다.</span>
        <span onClick={toPostBoardHandler}>저장된 게시물을 확인해보세요</span>
      </div>
    }
    </>
  )
}

export default PostBookmarkToast;