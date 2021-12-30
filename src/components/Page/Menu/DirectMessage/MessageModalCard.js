import "./_DirectMessage.scss";
import {none_profile} from "../../../../common/IconImage";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, saveUser} from "../../../../redux/socket/socketSlice";


const MessageModalCard = ({_id, name, profileImage, userId,  SetCheck,
                          userInfo, SetUserInfo, noOnchange, check, checkUser}) => {
  const dispatch = useDispatch();

  const [Checked, setChecked] = useState(false);

  const [checkedItems, setCheckedItems] = useState([]);

  const [userList, SetUserList] = useState([]);
  const [deleteList, SetDeleteList] = useState([]);
  console.log(userList)
  console.log(checkedItems);


  const unCheckUser = [];

  const checkHandler = ({target}) => {
    setChecked(!Checked);
    if(target.checked){
      checkUser.push(userId);
      console.log(checkUser);
      dispatch(saveUser({
        checkUser,
      }))
    }else if (!target.checked){
      unCheckUser.push(userId);
      dispatch(deleteUser({
        unCheckUser,
      }))
      dispatch(deleteUser({

      }))
    }
    // checkedItemHandler(userId, target.checked);
  }
  // const checkedItemHandler = (Checked) => {
  //   if (Checked) {
  //     setCheckedItems([userId]);
  //     // setCheckedItems(checkedItems);
  //     // userList.push(...checkedItems);
  //     dispatch(saveUser({
  //       userList: checkedItems,
  //     }))
    // } else if (!Checked && checkedItems.has(userId)) {
    //   deleteList.push(...checkedItems);
    //   dispatch(deleteUser({
    //     userList: deleteList
    //   }))
    //   console.log(deleteList);
      // checkedItems.delete(id);
      // setCheckedItems(checkedItems);
      // SetUserInfo(userInfo.filter(user => userId !== user));
      // userList.push(...checkedItems);
      // dispatch(deleteUser({
      //   userList
      // }))
  //   }
  //   return checkedItems;
  // };

  // const checkedItemHandler = (id, Checked) => {
  //   if (Checked) {
  //     checkedItems.add(id);
  //     setCheckedItems(checkedItems);
  //     userList.push(...checkedItems);
  //     dispatch(saveUser({
  //       userList
  //     }))
  //   } else if (!Checked && checkedItems.has(id)) {
  //     deleteList.push(...checkedItems);
  //     dispatch(deleteUser({
  //       userList: deleteList
  //     }))
  //     console.log(deleteList);
  //     // checkedItems.delete(id);
  //     // setCheckedItems(checkedItems);
  //     // SetUserInfo(userInfo.filter(user => userId !== user));
  //     // userList.push(...checkedItems);
  //     // dispatch(deleteUser({
  //     //   userList
  //     // }))
  //   }
  //   return checkedItems;
  // };


  useEffect(() => {
    setChecked(false);
  },[userId, setChecked]);


  return(
    <>
      <div className="message_modal_card">
        <div>
          {profileImage?    <img src={profileImage} alt="profile_image"/> :
            <img src={none_profile} alt="profile_image"/>}

        </div>
        <div>
          <div>{userId}</div>
          <div>{name}</div>
        </div>
        <div>
          <label key={1}>
          <input type="checkbox" value={userId} checked={Checked} onChange={(e) => checkHandler(e)} />
          </label>
        </div>
      </div>
    </>
  )
}

export default MessageModalCard;