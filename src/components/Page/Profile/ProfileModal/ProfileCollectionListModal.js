const ProfileCollectionListModal = ({_setOpenModal}) => {

  const cancleClickHandler = () => {
		_setOpenModal(false);
	};

  return(
    <>
    <div onClick={cancleClickHandler}>완료</div>
    </>
  )
}

export default ProfileCollectionListModal;