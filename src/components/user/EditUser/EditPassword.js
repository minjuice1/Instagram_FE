import "./EditUser.scss";
import profile_img from "../../../image/profile.jpg";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {changePassword} from "../../../redux/user/user";

const EditPassword = () => {
  const dispatch = useDispatch();

  const [beforePwd, SetBeforePwd] = useState();
  const [newPwd, SetNewPwd] = useState();
  const [checkNewPwd, SetCheckNewPwd] = useState();



  const beforePwdOnChange = (e) => {
    SetBeforePwd(e.target.value)
  }
  const newPwdOnChange = (e) => {
    SetNewPwd(e.target.value)
  }
  const checkNewPwdOnChange = (e) => {
    SetCheckNewPwd(e.target.value)
  }

  const ChangePwdClickHandler = () => {

    dispatch(changePassword({
      beforePwd,
      newPwd,
      checkNewPwd,
    }),[dispatch])
  }

  return(
    <>
      <label>
        <div>
        이전 비밀번호 <input value={beforePwd} onChange={beforePwdOnChange}/>
        </div>
      </label>
      <label>
        <div>
        새 비밀번호 <input value={newPwd} onChange={newPwdOnChange}/>
        </div>
      </label>
      <label>
        <div>
        새 비밀번호 확인<input value={checkNewPwd} onChange={checkNewPwdOnChange}/>
        </div>
      </label>
      <button onClick={ChangePwdClickHandler}>비밀번호 변경</button>

      <div>비밀번호를 잊으셨나요?</div>
    </>
  )
}

export default EditPassword;