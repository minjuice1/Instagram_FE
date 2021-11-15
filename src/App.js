import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.scss';
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path={"/"} element={<Home/>}/>
       </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
