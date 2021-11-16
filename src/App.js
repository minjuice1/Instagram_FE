import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import FindPassword from "./components/Page/FindPassword";
import Header from "./components/Page/Header";
import Login from "./components/Page/Login";
import SignUp from "./components/Page/SignUp";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<FindPassword />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
