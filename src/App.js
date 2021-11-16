import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.scss';
import Home from "./components/Home/Home";
import Header from "./components/Page/Header/Header";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Header/>
       <Routes>
         <Route path={"/"} element={<Home/>}/>
       </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
