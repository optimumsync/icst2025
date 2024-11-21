import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import About from "./components/About";
import Contactus from "./components/Contactus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
