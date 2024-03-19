import React, { useState } from "react";
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
import { GoogleGenerativeAI } from "@google/generative-ai";

import axios, { Axios } from "axios";

const options = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];
const App = () => {
  const [activity, setActivity] = useState("");
  const [param, setParam] = useState({
    participant: "",
    type: "",
  });

  const [readmore, setReadmore] = useState(false);
  const [string, setString] = useState("");
  const [display, setDisplay] = useState([]);
  const navigate = useNavigate();
  const changePage = () => {
    let x = false;
    if (x) {
      navigate("/user/dashboard");
    } else {
      navigate("/user/forgot-password");
    }
  };

  const getGPTSuggestion = async (prompt) => {
    const genAI = new GoogleGenerativeAI(
      process.env.REACT_APP_GOOGLE_GEMINI_AI
    );

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    const textArray = text.split("**")
    setDisplay(textArray)
    console.log(textArray)
    // setString(text);
    // return response;
  };

  const fetchData = async () => {
    let url = "http://www.boredapi.com/api/activity?";
    if (param.type) {
      url += `type=${param.type}&`;
    }

    if (param.participant) {
      url += `participants=${param.type ? 1 : param.participant}&`;
    }

    console.log(url);
    let { data } = await axios.get(url);

    setActivity(data.activity);
    setReadmore(true);
  };

  return (
    <>
      <div className='border py-5 min-vh-100 bg-danger bg-gradients bg-opacity-25 d-flex align-items-center justify-content-center'>
        <div>
          <div className='vh-25'>
            <h1 className='display-1 fw-bold font-monospace'>Bored App</h1>
            <p>
              An app that A town hall different from bala blu, blue blu bulaba.
              broom broom broom brooooooooom. Bala blu blue blu bulaba.
            </p>
          </div>

          <div>
            <div className='row align-items-center'>
              <div className='mb-3 col'>
                <label htmlFor='' className='form-label'>
                  Participants
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='No of Participants'
                  onChange={(e) =>
                    setParam({ ...param, participant: e.target.value })
                  }
                  value={param.participant}
                />
              </div>
              <div className='mb-3 col'>
                <label htmlFor='' className='form-label'>
                  Type
                </label>
                <select
                  type='text'
                  className='form-control'
                  placeholder='Activity Type'
                  onChange={(e) => setParam({ ...param, type: e.target.value })}
                  value={param.type}
                >
                  {options.map((item) => (
                    <option key={item} value={item}>
                      {item.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
              <div className=' col'>
                <input
                  type='button'
                  className='form-control btn btn-lg btn-danger'
                  placeholder='Activity Type'
                  value='Search'
                  onClick={fetchData}
                  id=''
                />
              </div>
            </div>
            <hr />
            <h1 className='text-center'>
              {" "}
              {activity ? (
                activity
              ) : (
                <marquee className='text-secondary fs-6'>
                  Your activity goes here
                </marquee>
              )}
            </h1>

            {readmore ? (
              <>
                {display.map(item=>(
                  <p>{item}</p>
                ))}
                <button
                  className=' btn btn-danger'
                  onClick={() => getGPTSuggestion(`how to ${activity}`)}
                >
                  Read More
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
// return (
//   <>
//     <button onClick={fetchData}>Click Me!</button>
//     <Wrapper>
//     <Routes>
//           <Route path='/about-us' element={<AboutUsPage />} />
//           <Route path='/' element={<LandingPage />} />
//           <Route path='/landing' element={<Navigate to={"/"} />} />
//           <Route path='/:data' element={<Welcome />} />
//           <Route path='/sign-in' element={<SigninPage />} />
//           <Route path='/user/*' element={<UserRoute />} />
//           <Route path='/*' element={<NotFound />} />
//         </Routes>
//     </Wrapper>
//   </>
// );
