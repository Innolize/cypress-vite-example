import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/checkout";

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
          <Route path="/signin" Component={SignIn} />
          <Route path="/pricing" Component={Pricing} />
          <Route path="/checkout" Component={Checkout} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

