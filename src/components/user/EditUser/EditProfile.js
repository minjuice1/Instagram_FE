import {useState} from "react";
import "./EditUser.scss";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editProfile, getProfile} from "../../../redux/user/user";
import profile_img from "../../../image/profile.jpg";

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
        <div className="editName">
        <label>이름<input value={userName} onChange={onChangeUserName}/></label>
        </div>
        <div className="edituserId">
          <label>사용자 이름 <input value={userId} onChange={onChangeUserId} /></label>
        </div>
        <div className="editWebSite">
        <label>웹사이트<input value={userWebSite} onChange={onChangeUserWebSite}/></label>
        </div>
        <div className="editIntroduce">
        <label>소개<input value={userIntroduce} onChange={onChangeUserIntroduce}/></label>
        </div>
        <div className="editEmail">
        <label>이메일<input value={userEmail} onChange={onChangeUserEmail} /></label>
        </div>
        <div className="editNumber">
        <label> 전화번호<input  value={userNumber} onChange={onChangeUserNumber}/></label>
        </div>
        <div className="editGender">
          <label>성별<input  value={userGender} onChange={onChangeUserGender}/></label>

          </div>

        
        <button onClick={EditClickHandler}>제출</button>
      </div>
    </>
  )
}
export default EditProfile;