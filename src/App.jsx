import Home from "./HomePage/Home";
import SignUp from "./LoginPage/Signup";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login";
import Features from "./Features/Features";
import CreateSellerAccount from './CreateSellerAccount/CreateSellerAccount'
import CategoriesSection from "./HomePage/CategoriesSection";
import ServicesPage from "./services/ServicesPage";

import AboutUs from "./footer/ABOUT/Aboutus"
import OurMission from "./footer/ABOUT/OurMission"
import OurTeam from "./footer/ABOUT/OurTeam"
import Careers from "./footer/ABOUT/Careers"
import HelpCenter from "./footer/Support/HelpCenter"
import FAQs from "./footer/Support/FAQs"
import FeedbackForm from "./footer/Support/feedback"
import ContactUs from  "./footer/Contact/ContactUs"
import TermsnCond from  "./footer/Contact/TermsnCond"
import PrivacyPolicy from  "./footer/Contact/PrivacyPolicy"
import Blog from "./footer/blog/LatestPosts";
import LatestPosts from "./footer/blog/LatestPosts";
import PopularPosts from "./footer/blog/PopularPosts";
import Archives from "./footer/blog/Archives";
import BookService from "./bookaservice/bookservice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp/> } />
          <Route path="/login" element={<Login/> } />
          <Route path="/features" element={<Features/>} />
          <Route path="/create_seller_account" element={<CreateSellerAccount/>} />
          <Route path="/book_service" element={<BookService/>} />
          <Route path="/categories" element={<CategoriesSection />} />
          <Route path="/category/:categoryId" element={<ServicesPage />} />
          <Route path="/service/:serviceId" element={<Features />} />
          <Route path="Aboutus" element={<AboutUs/>} />
          <Route path="OurMission" element={<OurMission/>} />
          <Route path="OurTeam" element={<OurTeam/>} />
          <Route path="Careers" element={<Careers/>} />
          
          <Route path="HelpCenter" element={<HelpCenter/>} />
          <Route path="FAQs" element={<FAQs/>} />
          <Route path="FeedbackForm" element={<FeedbackForm/>} />
          
          <Route path="ContactUs" element={<ContactUs/>} />
          <Route path="TermsnCond" element={<TermsnCond/>} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy/>} />
          
          <Route path="LatestPosts" element={<LatestPosts/>} />
          <Route path="PopularPosts" element={<PopularPosts/>} />
          
          <Route path="Archives" element={<Archives/>} />
          

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
