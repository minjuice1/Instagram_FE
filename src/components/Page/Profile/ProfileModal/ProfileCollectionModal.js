import { react, useState } from 'react';
import ProfileCollectionListModal from './ProfileCollectionListModal';
import "./ProfileCollectionModal.scss";

const ProfileCollectionModal = ({setOpenModal}) => {

  // 컬렉션 이름 입력시 다음으로 넘어가게.
  const [collectionName, SetCollectionName] =  useState("");
  const nameOnChange = (e) => {
    SetCollectionName(e.target.value);
  }    
  
  // 모달 창 닫기
  const cancleClickHandler = () => {
		setOpenModal(false);
	};

  // next modal
  const [openModal, _setOpenModal] = useState(false);
  const addCollectionListHandler = () => {
    _setOpenModal(true);
  }

  return(
    <>
    {openModal && <ProfileCollectionListModal _setOpenModal={_setOpenModal}/>}

			<div className="profile_modal_container">
				<div className="collection_modal_modal">
					<div className="collection_modal_header">
            <div>새 컬렉션</div>
            <div onClick={cancleClickHandler}>X</div>
          </div>
					<div className="collection_modal_mid">
            <input type="text" value={collectionName} onChange={nameOnChange} placeholder=" 컬렉션 이름"/>
          </div>
          {collectionName ? (
            <div className="collection_modal_bottomOn" onClick={addCollectionListHandler}>다음</div>
          ) : (
            <div className="collection_modal_bottomOff">다음</div>
          )}
					
				</div>
			</div>
			<div className="collection_modal_overlay" onClick={cancleClickHandler}></div>
	</>
  )
  
}

export default ProfileCollectionModal;