import { react, useState } from 'react';

import ProfileCollectionListModal from './ProfileCollectionListModal';

import "./ProfileCollectionModal.scss";
import { AiOutlineLeft } from "react-icons/ai";
import { GrClose } from "react-icons/gr";


const ProfileCollectionModal = ({setOpenCollectionModal}) => {

  // 컬렉션 이름 입력시 다음 btn 활성화
  const [collectionName, SetCollectionName] =  useState("");
  const nameOnChange = (e) => {
    SetCollectionName(e.target.value);
  }    
  
  // 모달 창 닫기
  const cancleClickHandler = () => {
		setOpenCollectionModal(false);
	};

  // modal 선택
  const [modalChange, setModalChange] = useState(false);
  const addCollectionListHandler = () => {
    setModalChange(true);
  }

  return(
    <>
			<div className="profile_modal_container">
        {modalChange ?
        (<ProfileCollectionListModal setOpenCollectionModal={setOpenCollectionModal} setModalChange={setModalChange}/>) :
      (<div className="collection_modal_modal">
					<div className="collection_modal_header">
            <div>새 컬렉션</div>
            <div onClick={cancleClickHandler}><GrClose size={24}/></div>
          </div>
					<div className="collection_modal_mid">
            <input type="text" value={collectionName} onChange={nameOnChange} placeholder=" 컬렉션 이름"/>
          </div>
          {collectionName ? (
            <div className="collection_modal_bottomOn" onClick={addCollectionListHandler}>다음</div>
          ) : (
            <div className="collection_modal_bottomOff">다음</div>
          )}
				</div>)}
				
			</div>
			<div className="collection_modal_overlay" onClick={cancleClickHandler}></div>
	</>
  )
  
}

export default ProfileCollectionModal;