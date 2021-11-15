import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Header from "./components/Page/Header";
import Login from "./components/Page/Login";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
