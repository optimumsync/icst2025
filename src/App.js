import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// <<<<<<< main
// import Aboutus from "./components/Aboutus";
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
// <<<<<<< main
//         <Route path="/navbar" element={<Navbar />} />
//         <Route path="/about" element={<Aboutus />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
// =======
        <Route path="*" element={<Notfound />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
// >>>>>>> olen-pinto
      </Routes>
    </BrowserRouter>
  );
}

export default App;
