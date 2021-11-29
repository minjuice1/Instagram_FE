import React, {useLayoutEffect, useState} from "react";

import {Routes, Route, BrowserRouter, Navigate, useNavigate, Router} from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Page/Header/Header";
import Login from "./components/Page/Login/Login";
import SignUp from "./components/Page/Login/SignUp";
import FindPassword from "./components/Page/Login/FindPassword";
import Recommendation from "./components/Page/Recommendation/Recommendation";
import DirectMessage from "./components/Page/DirectMessage/DirectMessage";
import AddPost from "./components/Post/PostWrite/AddPost";
import PostDetail from "./components/Post/PostDetail";
import {useSelector} from "react-redux";
import {history} from "./history";


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

	const is_login = useSelector(state=>state.user.isLogin);
  const token = localStorage.getItem("user")
  const write_modal = useSelector(state => state.modal.add_modal);

  //헤더 띄우기용
  const show_header = is_login || token ;


  return (

    <div className="App">
      <CustomRouter history={history}>
        {show_header &&  <Header/>}

        {write_modal && <AddPost/>}
        <Routes>
          <Route path="/login" element={<RejectAuth redirectTo="/"> <Login/> </RejectAuth>}/>
          <Route path="/accounts/password" element={<RequireAuth redirectTo="/login"> <FindPassword/> </RequireAuth>}/>
          <Route path="/message" element={<RequireAuth redirectTo="/login"> <DirectMessage/> </RequireAuth>}/>
          <Route path="/recom" element={<RequireAuth redirectTo="/login"> <Recommendation/> </RequireAuth>}/>
          <Route path="/postdetail" element={<RequireAuth redirectTo="/login"> <PostDetail/> </RequireAuth>}/>
          <Route path="/accounts/signup" element={<RejectAuth redirectTo="/"> <SignUp/> </RejectAuth>}/>
          <Route path="/" element={<RequireAuth redirectTo="/login"> <Home/> </RequireAuth>}/>
          <Route path="/*" element={<RequireAuth redirectTo="/login"> <Home/> </RequireAuth>}/>
          <Route path="/postform" element={<RequireAuth redirectTo="/login"> <AddPost/> </RequireAuth>}/>
          <Route path="/message" element={<RequireAuth redirectTo="/login"> <DirectMessage/> </RequireAuth>}/>

        </Routes>

      </CustomRouter>
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
