import "./_CommentSwitch.scss";

const CommentSwitch = ({SetCommentCheck, commentCheck}) => {

  const commentCheckClickHandler = () => {
    SetCommentCheck(commentCheck => !commentCheck);
  }

  return(

    <>
      <input onClick={commentCheckClickHandler}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked={commentCheck}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  )
}

export default CommentSwitch;