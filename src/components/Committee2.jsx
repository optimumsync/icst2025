import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chiefpatron from "./committee/Chiefpatron";
import Section1 from "./committee/Section1";
import Section2_tracks from "./committee/Section2_tracks";
import Section3 from "./committee/Section3";
import Section4 from "./committee/Section4";

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
        <div className="lg:mx-20 xl:mx-40 my-3 md:my-4"><Section1/></div>
        <Section2_tracks/>
        <div className="lg:mx-20 xl:mx-40"><Section3/></div>
        {/* <Section3/> */}
        {/* <Section4/> */}
        <Section4/>
      </div>
      <Footer/>
    </div>
  );
}

export default Committee;
