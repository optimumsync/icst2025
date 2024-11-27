import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// <<<<<<< main
import Aboutus from "./components/Aboutus";
// =======
import Notfound from "./components/Notfound";
// import About from "./components/About";
// >>>>>>> olen-pinto
// import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/navbar" element={<Navbar />} />
         <Route path="/about-us" element={<Aboutus />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
