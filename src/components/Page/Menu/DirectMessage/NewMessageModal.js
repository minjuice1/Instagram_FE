import "../../../../common/_modalStyle.scss";
import React, {useEffect, useState} from "react";
import {x_img} from "../../../../common/IconImage";
import MessageModalCard from "./MessageModalCard";
import {headerSearch} from "../../../../redux/search/search";
import {useDispatch, useSelector} from "react-redux";
import CheckUser from "./CheckUser";

const NewMessageModal = ({SetNewMessage , SetNewMessages}) => {
  const dispatch = useDispatch();

  const user_list = useSelector(state=>state.search.user);


  //검색어 입력
  const [searchUser, SetSearchUser] = useState();
  const searchUserOnChange = (e) => {
    SetSearchUser(e.target.value);
  }



  const CancellationClickHandler = () => {
    if(SetNewMessage){
      SetNewMessage(false);
    }else {
      SetNewMessages(false);
    }
  }

  const [check, SetCheck] = useState(false);
  //엔터로 검색
  const searchEnter = (e) =>{
    if(e.key==='Enter'){
      const path = "directSearch"
      dispatch(headerSearch({
        searchResult : searchUser,
        path: path,
      }))
      SetCheck(false);
    }
  }

  const check_user = useSelector(state=>state.socket.userList);
  console.log("체크유저", check_user);




  return(
    <>
      <div className="new_message">
        <div className="new_message_header">
          <img src={x_img} alt="cancle" onClick={CancellationClickHandler}/>
          <a>새로운 메시지</a>
          <a className="message_next">다음</a>
        </div>
        <div className="message_search">
          <div>받는 사람:
            <div className="check_user">
              {check_user && check_user.map((user) => (
              <CheckUser userId={user.userId}/>
            ))}

          </div>
          </div>
          <div>
            <label>
              <input placeholder="검색..." onKeyPress={searchEnter} onChange={searchUserOnChange}/>
            </label>
          </div>
        </div>
        <div className="message_recommend">
          <div className="message_card">
            {user_list && user_list.map((user, index) => (
              <MessageModalCard _id={user._id} name={user.name} userId={user.userId} profileImage={user.profileImage}
                                SetCheck={SetCheck} />
            ))}

          </div>
        </div>
      </div>
      <div className="overlay" onClick={CancellationClickHandler}/>
    </>
  )
}

export default NewMessageModal;