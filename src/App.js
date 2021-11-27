import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Page/Header/Header";
import Login from "./components/Page/Login/Login";
import SignUp from "./components/Page/Login/SignUp";
import FindPassword from "./components/Page/Login/FindPassword";
import Recommendation from "./components/Page/Recommendation/Recommendation";
import DirectMessage from "./components/Page/DirectMessage/DirectMessage";
import AddPost from "./components/Post/PostWrite/AddPost";
import PostDetail from "./components/Post/PostCard/PostDetail";
import Profile from "./components/profile/Myprofile/Profile";

import { useEffect } from "react";
import { loginCheck } from "./redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const dispatch = useDispatch();
	const is_login = useSelector((state) => state.user.isLogin);
	const token = localStorage.getItem("user");

	useEffect(() => {
		if (token) {
			dispatch(loginCheck());
		}
	}, [token]);

	return (
		<div className="App">
			<BrowserRouter>
				{token && <Header />}

				<Routes>
					<Route
						path="/login"
						element={
							<RejectAuth redirectTo="/">
								{" "}
								<Login />{" "}
							</RejectAuth>
						}
					/>
					<Route
						path="/accounts/signup"
						element={
							<RejectAuth redirectTo="/">
								{" "}
								<SignUp />{" "}
							</RejectAuth>
						}
					/>
					<Route
						path="/"
						element={
							<RequireAuth redirectTo="/login">
								{" "}
								<Home />{" "}
							</RequireAuth>
						}
					/>
					<Route
						path="/*"
						element={
							<RequireAuth redirectTo="/login">
								{" "}
								<Home />{" "}
							</RequireAuth>
						}
					/>
					<Route
						path="/postform"
						element={
							<RequireAuth redirectTo="/login">
								{" "}
								<AddPost />{" "}
							</RequireAuth>
						}
					/>
					<Route
						path="/message"
						element={
							<RequireAuth redirectTo="/login">
								{" "}
								<DirectMessage />{" "}
							</RequireAuth>
						}
					/>
					<Route
						path="/accounts/password"
						element={
							<RequireAuth redirectTo="/login">
								{" "}
								<FindPassword />{" "}
							</RequireAuth>
						}
					/>
					<Route
						path="/message"
						element={
							<RequireAuth redirectTo="/login">
								{" "}
								<DirectMessage />{" "}
							</RequireAuth>
						}
					/>
					<Route
						path="/recom"
						element={
							<RequireAuth redirectTo="/login">
								{" "}
								<Recommendation />{" "}
							</RequireAuth>
						}
					/>
					<Route
						path="/postdetail"
						element={
							<RequireAuth redirectTo="/login">
								{" "}
								<PostDetail />{" "}
							</RequireAuth>
						}
					/>
					<Route
						path="/profile"
						element={
							<RequireAuth redirectTo="/login">
								{" "}
								<Profile />{" "}
							</RequireAuth>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

function RequireAuth({ children, redirectTo }) {
	const token = localStorage.getItem("user");
	return token ? children : <Navigate to={redirectTo} />;
}

function RejectAuth({ children, redirectTo }) {
	const token = localStorage.getItem("user");
	return !token ? children : <Navigate to={redirectTo} />;
}

export default App;
