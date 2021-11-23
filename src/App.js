import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Page/Header/Header";
import Login from "./components/Page/Login/Login";
import SignUp from "./components/Page/Login/SignUp";
import FindPassword from "./components/Page/Login/FindPassword";
import Recommendation from "./components/Page/Recommendation/Recommendation";
import DirectMessage from "./components/Page/DirectMessage/DirectMessage";
import PostForm from "./components/Home/Post/PostForm/PostForm";
import PostDetail from "./components/Home/Post/PostDetail";

import {useEffect} from "react";
import {loginCheck} from "./redux/user/userSlice";
import {useDispatch, useSelector} from "react-redux";


function RequireAuth({ children, redirectTo }) {
	const token = localStorage.getItem("user");
	return token ? children : <Navigate to={redirectTo} />;
}

function RejectAuth({children, redirectTo}) {
	const token = localStorage.getItem("user");
	return !token?  children :<Navigate to={redirectTo} />;
}

function App() {
	const dispatch = useDispatch();


		const is_login = useSelector(state=> state.user.isLogin);
		const token = localStorage.getItem("user");

	console.log(is_login);
		useEffect(() => {
			if(token)
			{dispatch(loginCheck());}
		},[token]);
		

	return (

		<div className="App">
			<BrowserRouter>
				{is_login && <Header /> }

				<Routes>

					<Route path="/login" element= {<RejectAuth redirectTo="/"> <Login /> </RejectAuth>}/>
					<Route path={"/accounts/signup"} element={<RejectAuth redirectTo="/"> <SignUp /> </RejectAuth>}/>

					<Route path ="/" element ={ <RequireAuth redirectTo="/login"> <Home /> </RequireAuth>}/>
					<Route path ="/*" element ={ <RequireAuth redirectTo="/login"> <Home /> </RequireAuth>}/>
					<Route path ="/postform" element ={ <RequireAuth redirectTo="/login"> <PostForm /> </RequireAuth>}/>
					<Route path ="/message" element ={ <RequireAuth redirectTo="/login"> <DirectMessage/> </RequireAuth>}/>
					<Route path ="/accounts/password" element ={ <RequireAuth redirectTo="/login"> <FindPassword/> </RequireAuth>}/>
					<Route path ="/message" element ={ <RequireAuth redirectTo="/login"> <DirectMessage/> </RequireAuth>}/>
					<Route path ="/recom" element ={ <RequireAuth redirectTo="/login"> <Recommendation/> </RequireAuth>}/>
					<Route path={"/"} element={<PostDetail />} />


				</Routes>

			</BrowserRouter>
		</div>
	);
}

export default App;
