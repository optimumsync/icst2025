import React from "react";
import CardCarousel from "./CardCarousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chiefpatron from "./committee/Chiefpatron";
import Section1 from "./committee/Section1";

function Committee() {
  return (
    <div>
      <Navbar/>
      {/* <CardCarousel /> */}
      <div className="m-3">
        <div className="m-4"><h1 className="text-center text-2xl md:text-3xl text-gogreen font-bold">Conference Committee</h1>
        <p className="text-center text-green-800 font-semibold">"Meet the Minds Behind the Mission"</p>
        </div>
        <Chiefpatron/>
        <Section1/>
        {/* <Section2/>
        <Section3/>
        <Section4/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default Committee;
