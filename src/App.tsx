import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import Wrapper from "./components/Wrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import CourseWeeks from "./Pages/CourseWeeks";

function App() {
  return (
      <>
          <Wrapper>
              <BrowserRouter>
                  <Routes>
                      <Route path={'/'} element={<Home />} />
                      <Route path={'/login'} element={<Login />} />
                      <Route path={'/register'} element={<Register />} />
                      <Route path={'/about'} element={<About />} />
                      <Route path={'/courseWeeks/:courseId'} element={<CourseWeeks />} />
                  </Routes>
              </BrowserRouter>
          </Wrapper>
      </>);
}

export default App;
