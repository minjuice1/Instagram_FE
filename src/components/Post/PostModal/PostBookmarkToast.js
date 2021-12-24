// postCard css 공유
import "../../../common/_bookmarkToast.scss";

const PostBookmarkToast = ({bookmarkToast}) => {
  return(
    <>
    {bookmarkToast &&
      <div className="bookmark_popup">
        <span>항목이 저장되었습니다.</span>
        <span>저장된 게시물을 확인해보세요</span>
      </div>
    }
    </>
  )
}

export default PostBookmarkToast;