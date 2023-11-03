import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import {Route, Routes} from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
