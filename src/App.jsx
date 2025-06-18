import { useState,useRef,useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./login";
import RegisterForm from "./register";
import FitnessDashboard from "./home";
import Work from "./workout";
import Progress from "./progress";
import Dance from "./dance";

function App() {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/home" element={<FitnessDashboard />} />
      <Route path="/work" element={<Work />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/dance" element={<Dance />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;

