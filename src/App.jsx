import Home from "./HomePage/Home";
import SignUp from "./LoginPage/Signup";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Features from "./Features/Features";
import CreateSellerAccount from "./CreateSellerAccount/CreateSellerAccount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<SignUp/> } />
          <Route path="login" element={<Login/> } />
          <Route path="features" element={<Features/>} />
          <Route path="create_seller_account" element={<CreateSellerAccount/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
