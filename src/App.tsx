import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
import Pricing from "./pages/pricing";
import Checkout from "./pages/checkout";
import MainPage from "./pages/main";

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

