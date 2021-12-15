import { useSelector } from 'react-redux';

import { AiOutlineCheck } from "react-icons/ai";
import { useState } from 'react';

const ProfileSavedAllPost = ({savedPost}) => {

  const saved = useSelector((state) => state.post.savedPost);

  const [IsClick, setIsClick] = useState(false);
  const postClickHandler = () => {
    setIsClick(!IsClick);
  }

  return(
    <>
      <div className="savedPost_list">
        <img className="savedPost_each" src={savedPost} onClick={postClickHandler}/>
        {IsClick && <span><AiOutlineCheck/></span>}
      </div>
		</>
  )
}

export default ProfileSavedAllPost;