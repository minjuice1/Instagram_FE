
// ProfileCollectionModal과 css 공유
import "./ProfileCollectionModal.scss";
import { AiOutlineLeft } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import {recomtest} from "../../../../common/IconImage";

const ProfileCollectionListModal = ({setOpenModal, setModalChange}) => {

  const cancleClickHandler = () => {
		setOpenModal(false);
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
      </div>
    </>
  )
}

export default ProfileCollectionListModal;