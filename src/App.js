import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Page/Header/Header";
import Login from "./components/Page/Login/Login";
import SignUp from "./components/Page/Login/SignUp";
import FindPassword from "./components/Page/Login/FindPassword";
import Recommendation from "./components/Page/Recommendation/Recommendation";
import DirectMessage from "./components/Page/DirectMessage/DirectMessage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/login"} element={<Login />} />
					<Route path={"/accounts/signup"} element={<SignUp />} />
					<Route path={"/accounts/password"} element={<FindPassword />} />
          <Route path={"/recom"} element={<Recommendation/>}/>
          <Route path={"/message"} element={<DirectMessage/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
