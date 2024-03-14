import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";
import Wrapper from "./components/Wrapper";
import NotFound from "./pages/NotFound";
import UserRoute from "./routes/UserRoute";
import Welcome from "./components/Welcome";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const changePage = () => {
    let x = false;
    if (x) {
      navigate("/user/dashboard");
    } else {
      navigate("/user/forgot-password");
    }
  };
  return (
    <>
      <button onClick={changePage}>Click Me!</button>
      <Wrapper>
        <Routes>
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/landing' element={<Navigate to={"/"} />} />
          {/* <Route path='/:data' element={<Welcome />} /> */}
          <Route path='/sign-in' element={<SigninPage />} />
          <Route path='/user/*' element={<UserRoute />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
