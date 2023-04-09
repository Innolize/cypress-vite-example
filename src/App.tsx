import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";

const MainPage = () => {
  return (
    <div>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>React</h1>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" Component={MainPage}></Route>
          <Route path="/signup" Component={SignUp}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

