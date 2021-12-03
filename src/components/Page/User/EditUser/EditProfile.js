import {useState} from "react";
import "./EditUser.scss";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editProfile} from "../../../../redux/user/user";
import profile_img from "../../../../image/profile.jpg";

const EditProfile = () => {
  const dispatch = useDispatch();


  const userInfo = useSelector(state=>state.user.user);


  const name = userInfo.name
  const id = userInfo.userId
  const webSite = userInfo.website
  const introduce = userInfo.introdution
  const email = userInfo.email
  const number = userInfo.phoneNum
  const gender = userInfo.gender

  const [userName, SetUserName] = useState(name);
  const [userId, SetUserId] = useState(id);
  const [userWebSite, SetUserWebSite] = useState(webSite);
  const [userIntroduce, SetUserIntroduce] = useState(introduce);
  const [userEmail, SetUserEmail] = useState(email);
  const [userNumber, SetUserNumber] = useState(number);
  const [userGender, SetUserGender] = useState(gender);


  const onChangeUserName = (e)=> { SetUserName(e.target.value); };
  const onChangeUserId = (e)=> { SetUserId(e.target.value); };
  const onChangeUserWebSite = (e)=> { SetUserWebSite(e.target.value); };
  const onChangeUserIntroduce = (e)=> { SetUserIntroduce(e.target.value); };
  const onChangeUserEmail = (e)=> { SetUserEmail(e.target.value); };
  const onChangeUserNumber = (e)=> { SetUserNumber(e.target.value); };
  const onChangeUserGender= (e)=> { SetUserGender(e.target.value); };

  const EditClickHandler = () => {
    dispatch(
      editProfile({
      userName,
      userId,
      userWebSite,
      userIntroduce,
      userEmail,
      userNumber,
      userGender,
      }),
      [dispatch],
    )
  }

 return(
    <>
      <div className="editProfile">
        <div className="edit_user_info">
          <img src={profile_img} alt={profile_img}/>
          <div>
            <div>{userInfo.userId}</div>
            <div>프로필 사진 바꾸기</div>
          </div>

        </div>
        <div className="edit_form">

        <div className="edit_forms">
        <div className="editName">이름</div>
        <div className="edituserId">사용자 이름</div>
        <div className="editWebSite">웹사이트</div>
        <div className="editIntroduce">소개</div>
        <div className="editEmail">이메일</div>
        <div className="editNumber">전화번호</div>
        <div className="editGender">성별</div>
        </div>
        <div className="edit_forms">
          <div className="editName">
            <label><input className="editInput" value={userName} onChange={onChangeUserName}/></label>
            <a>사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.
              이름은 14일 안에 두 번만 변경할 수 있습니다.</a>
          </div>
          <div className="edituserId">
            <label> <input className="editInput" value={userId} onChange={onChangeUserId} /></label>
          </div>
          <div className="editWebSite">
            <label><input className="editInput" value={userWebSite} onChange={onChangeUserWebSite}/></label>
          </div>
          <div className="editIntroduce">
            <label><input className="editInput" value={userIntroduce} onChange={onChangeUserIntroduce}/></label>
          </div>
          <div className="editEmail">
            <label><input className="editInput" value={userEmail} onChange={onChangeUserEmail} /></label>
          </div>
          <div className="editNumber">
            <label><input className="editInput"  value={userNumber} onChange={onChangeUserNumber}/></label>
          </div>
          <div className="editGender">
            <label><input className="editInput"  value={userGender} onChange={onChangeUserGender}/></label>

          </div>
          <button onClick={EditClickHandler}>제출</button>
        </div>

        </div>
      </div>
    </>
  )
}
export default EditProfile;