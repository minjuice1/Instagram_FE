import { react, useState } from 'react';
import "./ProfileCollectionModal.scss";

import { AiOutlineLeft } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import {recomtest} from "../../../../common/IconImage";
const ProfileCollectionModal = ({setOpenModal}) => {

  // 컬렉션 이름 입력시 다음 btn 활성화
  const [collectionName, SetCollectionName] =  useState("");
  const nameOnChange = (e) => {
    SetCollectionName(e.target.value);
  }    
  
  // 모달 창 닫기
  const cancleClickHandler = () => {
		setOpenModal(false);
	};

  // modal 선택
  const [modalChange, setModalChange] = useState(false);
  const addCollectionListHandler = () => {
    setModalChange(true);
  }
  const addCollectionHandler = () => {
    setModalChange(false);
  }

  return(
    <>
			<div className="profile_modal_container">
        {modalChange ?
        (<div className="collectionList_modal_modal">
        <div>
          <div onClick={addCollectionHandler}><AiOutlineLeft size={24}/> </div>
          <div>저장된 항목에서 추가</div>
          <div onClick={cancleClickHandler}><GrClose size={24}/></div>
        </div>
        <div>
          <div>
            <img src={recomtest} />
          </div>
          <div>
            <img src={recomtest} />
          </div>
          <div>
            <img src={recomtest} />
          </div>
        </div>
        <div >완료</div>
      </div>) :
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