import React, {useEffect, useLayoutEffect, useState, Suspense} from "react";
import {Routes, Route, Navigate, Router} from "react-router-dom";
import "./App.scss";
import {useDispatch, useSelector} from "react-redux";
import {history} from "./history";

//주소
import Home from "./components/Main/Main";
import Header from "./components/Page/Header/Header";
import Login from "./components/Page/User/Login/Login";
import SignUp from "./components/Page/User/Login/SignUp";
import FindPassword from "./components/Page/User/Login/FindPassword";
import Recommendation from "./components/Page/Menu/Recommendation/Recommendation";
import DirectMessage from "./components/Page/Menu/DirectMessage/DirectMessage";
import AddPost from "./components/Post/PostWrite/AddPost";
import PostDetail from "./components/Post/PostDetail";
import Profile from "./components/Page/Profile/Profile";

import EditUser from "./components/Page/User/EditUser/EditUser";
import {getProfile} from "./redux/user/user";




const CustomRouter = ({history, ...props}) => {
	const [state, setState] = useState({
		action: history.action,
		location: history.location
	});

	useLayoutEffect(() => history.listen(setState), [history]);

	return (
		<Router
			{...props}
      location={state.location}
			navigationType={state.action}
			navigator={history}
		/>
	);
};



function App() {
  const dispatch = useDispatch();
	const is_login = useSelector(state=>state.user.isLogin);
  const token = localStorage.getItem("user")
  const write_modal = useSelector(state => state.modal.add_modal);


  //내정보 불러오기
  useEffect(() => {
    if(token){
      dispatch(getProfile());
    }
  }, [dispatch]);


  //헤더 띄우기용
  const show_header = is_login || token ;


  return (

    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
      <CustomRouter history={history}>
        {show_header &&  <Header/>}
        {write_modal && <AddPost/>}
        <Routes>
          <Route path="/login" element={<RejectAuth redirectTo="/"> <Login/> </RejectAuth>}/>
          <Route path="/accounts/password" element={<RequireAuth redirectTo="/login"> <FindPassword/> </RequireAuth>}/>
          <Route path="/message" element={<RequireAuth redirectTo="/login"> <DirectMessage/> </RequireAuth>}/>
          <Route path="/recom" element={<RequireAuth redirectTo="/login"> <Recommendation/> </RequireAuth>}/>
          <Route path="/postdetail/:postId" element={<RequireAuth redirectTo="/login"> <PostDetail/> </RequireAuth>}/>
          <Route path="/accounts/signup" element={<RejectAuth redirectTo="/"> <SignUp/> </RejectAuth>}/>
          <Route path="/" element={<RequireAuth redirectTo="/login"> <Home/> </RequireAuth>}/>
          <Route path="/*" element={<RequireAuth redirectTo="/login"> <Home/> </RequireAuth>}/>
          <Route path="/postform" element={<RequireAuth redirectTo="/login"> <AddPost/> </RequireAuth>}/>
          <Route path="/message" element={<RequireAuth redirectTo="/login"> <DirectMessage/> </RequireAuth>}/>
          <Route path="/edituser" element={<RequireAuth redirectTo="/login"> <EditUser/> </RequireAuth>}/>
					<Route path="/profile/"	element={<RequireAuth redirectTo="/login"> <Profile/></RequireAuth>}/>
					<Route path="/profile/:user_Id"	element={<RequireAuth redirectTo="/login"> <Profile /> </RequireAuth>}/>
					<Route path="/myprofile/:user_Id"	element={<RequireAuth redirectTo="/login"> <Profile /> </RequireAuth>}/>
					<Route path="/profile/channel" element={<RequireAuth redirectTo="/login"> <Profile /> </RequireAuth>}/>
					<Route path="/profile/saved" element={<RequireAuth redirectTo="/login"> <Profile /> </RequireAuth>}/>
					<Route path="/profile/tagged"	element={<RequireAuth redirectTo="/login"> <Profile /> </RequireAuth>}/>

        </Routes>

      </CustomRouter>
    </Suspense>
    </div>

  );
}

function RequireAuth({children, redirectTo}) {
  const token = localStorage.getItem("user");
  return token ? children : <Navigate to={redirectTo}/>;
}

function RejectAuth({children, redirectTo}) {
  const token = localStorage.getItem("user");
  return !token ? children : <Navigate to={redirectTo}/>;
}

export default App;
