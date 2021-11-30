import {useState} from "react";
import "./EditUser.scss";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../../redux/user/user";

const EditProfile = () => {
  const dispatch = useDispatch();


  useEffect(() => {
   dispatch(getProfile());
   }, [dispatch]);

  const userInfo = useSelector(state=>state.user.user);

  const a = userInfo.name
  //
  const [userName, SetUserName] = useState(a);
  const [userId, SetUserId] = useState();
  const [userWebSite, SetUserWebSite] = useState();
  const [userIntroduce, SetUserIntroduce] = useState();
  const [userEmail, SetUserEmail] = useState();
  const [userNumber, SetUserNumber] = useState();
  const [userGender, SetUserGender] = useState();

  //
  const onChangeUserName = (e)=> { SetUserName(e.target.value); };


  //
  // const [inputs, SetInputs] = useState({
  //   userName: a,
  //   userId: userInfo.userId,
  // })
  //
  // const {userName, userId} = inputs;
  //
  // const onChange = (e) => {
  //   const {value, userName} = e.target;
  //   SetInputs({
  //     ...inputs,
  //     [userName] : value
  //   });
  // }



 return(
    <>
      <div className="editProfile">
        <div className="editPicture">
          아이디
        </div>
        <div className="editName">
        <label>이름<input value={userName} onChange={onChangeUserName}/></label>
        </div>
        <div className="edituserId">
          {/*<label>사용자 이름 <input value={userId} onChange={onChange}/></label>*/}
        </div>
        <div className="editWebSite">
        <label>웹사이트<input/></label>
        </div>
        <div className="editIntroduce">
        <label>소개<input/></label>
        </div>
        <div className="editEmail">
        <label>이메일<input value={userInfo.email}/></label>
        </div>
        <div className="editNumber">
        <label> 전화번호<input/></label>
        </div>
        <div className="editGender">
          <label>성별<input/></label>

          </div>

        
        <button>제출</button>
      </div>
    </>
  )
}
export default EditProfile;