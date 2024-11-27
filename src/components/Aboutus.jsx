import React from 'react';
// import './Aboutus.css';
import img1 from './images/Untitled1.jpeg'; 
import img2 from './images/Untitled2.jpeg'; 
import img3 from './images/Untitled3.jpeg'; 
import img4 from './images/Untitled4.jpeg'; 
import img5 from './images/Untitled5.jpeg'; 
import img6 from './images/Untitled6.jpeg'; 
// import nieImg from '/home/olen-pinto/projects/icst2025/icst2025/src/components/images/NIE.jpeg'; 
// import dortmundImg from '/home/olen-pinto/projects/icst2025/icst2025/src/components/images/FHDortmund.jpeg';
import Navbar from './Navbar';

const Aboutus = () => {
  return (
    <><Navbar/>
    <div className="about-us h-screen w-full justify-center">
      <h1 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gogreen via-gogreen to-green-400 flex justify-center p-5'>About Us</h1>

      {/* ICST Section */}
      {/* <div className="about-us-content">
        <div className="about-us-text">
          <h2>ICST</h2>
          <ul>
            <li>
              The International Conference on Sustainable Technology and Conclave brings together academic scientists, researchers, and professionals to exchange ideas and share advancements in sustainable technology. This interdisciplinary platform fosters collaboration among academia, industry, and policymakers, addressing pressing environmental challenges through discussions, workshops, and presentations.
            </li>
            <li>
              Featuring keynote speakers from leading institutions, the conference highlights future trends and real-world solutions in sustainable development. Participants will engage in interactive sessions, networking opportunities, and exhibitions, inspiring partnerships and ideas that contribute to a global sustainability agenda.
            </li>
          </ul>
        </div>
        <div className="about-us-imagesd w-1/2 grid grid-cols-3 h-20 gap-2">
          <img src={img1} alt="ICST Image 1" />
          <img src={img2} alt="ICST Image 2" />
          <img src={img3} alt="ICST Image 3" />
          <img src={img4} alt="ICST Image 4" />
          <img src={img6} alt="ICST Image 6" />
          <img src={img5} alt="ICST Image 5" />
        </div>
      </div> */}

      {/* NIE Section */}
      {/* <div className="about-us-content">
        <div className="about-us-text">
          <h2>NIE</h2>
          <p>
            The National Institute of Engineering (NIE), founded in 1946, is a premier institution recognized for its academic excellence and legacy. Ranked among the top engineering colleges in India, NIE stands as a prestigious institution under VTU, Karnataka. It offers undergraduate and postgraduate programs with a focus on innovation and excellence in engineering education.
          </p>
          <p>
            Since 2022, NIE has been operating two campuses, including one specialized in AI, ML, and Computer Science, fostering technical education and innovation.
          </p>
        </div>
        <div className="about-us-images">
          <img src={nieImg} alt="NIE Campus" />
        </div>
      </div> */}

      {/* FH Dortmund Section */}
      {/* <div className="about-us-content">
        <div className="about-us-text">
          <h2>FH Dortmund</h2>
          <p>
            Fachhochschule Dortmund - University of Applied Sciences and Arts, Germany, is a prominent institution in the Ruhr area. Established in 1971, it spans three campuses offering diverse academic programs, including Engineering, IT, and Design.
          </p>
          <p>
            With over 14,000 students, FH Dortmund is renowned for fostering innovation and international collaboration, significantly contributing to local and global communities.
          </p>
        </div>
        <div className="about-us-images">
          <img src={dortmundImg} alt="FH Dortmund Campus" />
        </div>
      </div> */}
      <div className='bg-white flex justify-center'>
      <div className='md:w-3/4 lg:1/2 md:grid md:grid-cols-2 h-full bg-red-200'>
        <div>
          <div className='flex justify-center'>
          <div className=''>
            <div className='text-2xl font-semibold drop-shadow-md'>ICST</div>
            <hr className='mb-2 w-12 border-black border-2'/>
          </div>
          </div>
          <ul className='list-disc m-10 text-justify'>
            <li>The International Conference on Sustainable Technology and
              Conclave brings together academic scientists, researchers, and
              professionals to exchange ideas and share advancements in
              sustainable technology. This interdisciplinary platform fosters
              collaboration among academia, industry, and policymakers,
              addressing pressing environmental challenges through
              discussions, workshops, and presentations. Attendees will
              explore cutting-edge innovations in green technologies,
              renewable energy, and resource efficiency, driving the adoption
              of sustainable practices worldwide.</li>
            <li>
            Featuring keynote speakers from leading institutions, the
            conference highlights future trends and real-world solutions in
            sustainable development. Participants will engage in interactive
            sessions, networking opportunities, and exhibitions, inspiring
            partnerships and ideas that contribute to a global sustainability
            agenda.
            </li>
          </ul>
        </div>
        <div className='w-full h-full grid grid-cols-3 p-2'>
          <img src={img1} alt="ICST Image 1" className='h-full w-full'/>
          <img src={img2} alt="ICST Image 2" className='h-full w-full'/>
          <img src={img3} alt="ICST Image 3" className='h-full w-full'/>
          <img src={img4} alt="ICST Image 4" className='h-full w-full'/>
          <img src={img6} alt="ICST Image 6" className='h-full w-full'/>
          <img src={img5} alt="ICST Image 5" className='h-full w-full'/>
        </div>
      </div>
      
      
      </div>
      <div className='bg-white flex justify-center'>
      <div className='md:w-3/4 lg:1/2 md:grid md:grid-cols-2 h-full bg-red-200'>
        <div>
          <div className='flex justify-center'>
          <div className=''>
            <div className='text-2xl font-semibold drop-shadow-md'>ICST</div>
            <hr className='mb-2 w-12 border-black border-2'/>
          </div>
          </div>
          <ul className='list-disc m-10 text-justify'>
            <li>The International Conference on Sustainable Technology and
              Conclave brings together academic scientists, researchers, and
              professionals to exchange ideas and share advancements in
              sustainable technology. This interdisciplinary platform fosters
              collaboration among academia, industry, and policymakers,
              addressing pressing environmental challenges through
              discussions, workshops, and presentations. Attendees will
              explore cutting-edge innovations in green technologies,
              renewable energy, and resource efficiency, driving the adoption
              of sustainable practices worldwide.</li>
            <li>
            Featuring keynote speakers from leading institutions, the
            conference highlights future trends and real-world solutions in
            sustainable development. Participants will engage in interactive
            sessions, networking opportunities, and exhibitions, inspiring
            partnerships and ideas that contribute to a global sustainability
            agenda.
            </li>
          </ul>
        </div>
        <div className='w-full h-full grid grid-cols-3 p-2f' >
          <img src={img1} alt="ICST Image 1" className='h-full w-full'/>
          <img src={img2} alt="ICST Image 2" className='h-full w-full'/>
          <img src={img3} alt="ICST Image 3" className='h-full w-full'/>
          <img src={img4} alt="ICST Image 4" className='h-full w-full'/>
          <img src={img6} alt="ICST Image 6" className='h-full w-full'/>
          <img src={img5} alt="ICST Image 5" className='h-full w-full'/>
        </div>
      </div>
      
      
      </div>

    </div>
    </>
  );
};

export default Aboutus;