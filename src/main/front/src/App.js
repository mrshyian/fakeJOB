import './App.css';
import Header from "./header/Header";
import Home from "./home-page/Home";
import {Outlet} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Header/>
        <Outlet/>
    </div>
  );
}

export default App;
