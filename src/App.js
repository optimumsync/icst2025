import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import About from "./components/About";
import Contactus from "./components/Contactus";
import RegistrationPage from "./components/Registration";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contactus />} />
        <Route path="/Registration" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
