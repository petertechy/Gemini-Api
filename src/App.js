import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";
import Wrapper from "./components/Wrapper";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <>
      <h1>This is in App JS</h1>
      <Wrapper>
        <Routes>
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/landing' element={<Navigate to={"/"}/>} />
          <Route path='/sign-in' element={<SigninPage />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
