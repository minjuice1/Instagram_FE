import { useSelector } from 'react-redux';


import ProfileSavedAllPost from './ProfileSavedAllPost';

// ProfileCollectionModal과 css 공유
import "./ProfileCollectionModal.scss";
import { AiOutlineLeft } from "react-icons/ai";
import { GrClose } from "react-icons/gr";


const ProfileCollectionListModal = ({setOpenCollectionModal, setModalChange}) => {

  const saved = useSelector((state) => state.post.savedPost);

  const cancleClickHandler = () => {
		setOpenCollectionModal(false);
	};

  const addCollectionHandler = () => {
    setModalChange(false);
  }

  return(
    <>
      <div className="collectionList_modal_modal">
        <div>
          <div onClick={addCollectionHandler}><AiOutlineLeft size={24}/> </div>
          <div>저장된 항목에서 추가</div>
          <div onClick={cancleClickHandler}><GrClose size={24}/></div>
        </div>
        <div>
          {saved && saved.map((post) => (
            <ProfileSavedAllPost savedPost = {post.imageUrl}/>
          ))}
        </div>
        <div >완료</div>
      </div>
    </>
  )
}

export default ProfileCollectionListModal;