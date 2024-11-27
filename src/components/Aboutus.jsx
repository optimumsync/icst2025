import React from "react";
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
    <>
      <Navbar />
      <div className="about-us w-full justify-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gogreen via-gogreen to-green-400 flex justify-center p-5">
          About Us
        </h1>
        <div className="flex flex-col gap-y-5 py-8">
          <div className="bg-white flex justify-center">
            {/* <div className="md:w-3/4 lg:w-8/12 md:grid md:grid-cols-2 h-full"> */}
            <div className="lg:w-10/12 md:grid md:grid-cols-2 h-full">
              <div>
                <div className="flex justify-center">
                  <div className="">
                    <div className="text-2xl text-gogreen font-semibold drop-shadow-md">
                      ICST
                    </div>
                    <hr className="mb-2 w-12 border-gogreen border-2" />
                  </div>
                </div>
                <ul className="list-disc m-10 text-justify">
                  <li>
                    The International Conference on Sustainable Technology and
                    Conclave brings together academic scientists, researchers,
                    and professionals to exchange ideas and share advancements
                    in sustainable technology. This interdisciplinary platform
                    fosters collaboration among academia, industry, and
                    policymakers, addressing pressing environmental challenges
                    through discussions, workshops, and presentations. Attendees
                    will explore cutting-edge innovations in green technologies,
                    renewable energy, and resource efficiency, driving the
                    adoption of sustainable practices worldwide.
                  </li>
                  <li>
                    Featuring keynote speakers from leading institutions, the
                    conference highlights future trends and real-world solutions
                    in sustainable development. Participants will engage in
                    interactive sessions, networking opportunities, and
                    exhibitions, inspiring partnerships and ideas that
                    contribute to a global sustainability agenda.
                  </li>
                </ul>
              </div>
              <div className="m-5 sm:m-0 flex items-center">
                <img src={Group4} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-white flex justify-center">
            <div className="lg:w-10/12 md:grid md:grid-cols-2 h-full">
              <div className="order-2">
                <div className="flex justify-center">
                  <div className="">
                    <div className="text-2xl text-gogreen font-semibold drop-shadow-md">
                      NIE
                    </div>
                    <hr className="mb-2 w-10 border-gogreen border-2" />
                  </div>
                </div>
                <ul className="list-disc m-10 text-justify">
                  <li>
                    The National Institute of Engineering (NIE), founded in
                    1946, is a premier institution recognized for its academic
                    excellence and legacy. Ranked among the top 200 engineering
                    colleges in India as per NIRF-2023 and 17th by *The Week*’s
                    survey, NIE stands alongside prestigious institutions like
                    IITs and NITs. It is a Grant-in-Aid institution, approved by
                    AICTE, accredited by NAAC, and holds autonomous status under
                    Visvesvaraya Technological University (VTU), Belagavi, since
                    2007. Most of its undergraduate and postgraduate programs
                    are NBA- accredited, reflecting its commitment to quality
                    education.
                  </li>
                  <li>
                    NIE offers 7 undergraduate and 10 postgraduate programs,
                    with all its departments recognized as research centers
                    under VTU and AICTE’s Quality Improvement Program (QIP). The
                    institute is one of 14 colleges in Karnataka included in the
                    MHRD-World Bank-supported Technical Education Quality
                    Improvement Programme (TEQIP) across all three phases,
                    further highlighting its contribution to technical
                    education.
                  </li>
                  <li>
                    Since 2022, NIE has been operating from two campuses: the
                    NIE North campus in Koorgalli, Mysuru, offers specialized
                    programs in Computer Science & Engineering, Information
                    Science & Engineering, Artificial Intelligence & Machine
                    Learning, and Master of Computer Applications. Managed by a
                    society of distinguished alumni, NIE continues to foster
                    innovation and excellence in engineering education.
                  </li>
                </ul>
              </div>
              <div className="m-5 sm:m-0 order-1 flex items-center justify-end">
                <img src={nieImg} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-white flex justify-center">
            <div className="lg:w-10/12 md:grid md:grid-cols-2 h-full">
              <div>
                <div className="flex justify-center">
                  <div className="">
                    <div className="text-2xl text-gogreen font-semibold drop-shadow-md">
                    FH Dortmund
                    </div>
                    <hr className="mb-2 border-gogreen border-2" />
                  </div>
                </div>
                <ul className="list-disc m-10 text-justify">
                  <li>
                    Fachhochschule Dortmund - University of Applied Sciences and
                    Arts, located in Dortmund, Germany, is a prominent
                    institution in the Ruhr area, Europe’s fourth-largest urban
                    region. Established in 1971 through a merger of several
                    higher education institutions, the university spans three
                    campuses, reflecting its diverse academic heritage. With
                    14,057 students and 894 staff members, including 255
                    teaching staff, it is a vital hub for applied sciences
                    education and research.
                  </li>
                  <li>
                    The university’s city center campus on Sonnenstraße hosts
                    the Faculties of Mechanical Engineering, Electrical
                    Engineering, and Information Technology, while the Faculty
                    of Design operates at Max-Ophüls-Platz. In Eichlinghofen,
                    near TU Dortmund University, the Faculties of Applied Social
                    Studies, Business Studies, Computer Science, and
                    Architecture occupy multiple buildings. Renowned for its
                    Faculty of Business Studies, the university plays a pivotal
                    role in the region’s academic and professional growth.
                  </li>
                  <li>
                    Fachhochschule Dortmund’s administrative offices are located
                    throughout the city center, complementing its extensive
                    academic offerings. The institution fosters innovation and
                    international collaboration, contributing significantly to
                    local and global communities.
                  </li>
                </ul>
              </div>
              <div className="m-5 sm:m-0 flex items-center">
                <img src={dortmundImg} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-white flex justify-center">
            <div className="lg:w-10/12 md:grid md:grid-cols-2 h-full">
              <div className="order-2">
                <div className="flex justify-center">
                  <div className="">
                    <div className="text-2xl font-semibold text-gogreen drop-shadow-md">
                      IEI
                    </div>
                    <hr className="mb-2 w-7 border-gogreen border-2" />
                  </div>
                </div>
                <ul className="list-disc m-10 text-justify">
                  <li>
                    The Institution of Engineers (India) [IEI], established in
                    1920 and incorporated under Royal Charter in 1935, is the
                    largest multi- disciplinary professional body of engineers
                    in India. Headquartered in Kolkata, IEI is a “Body
                    Corporate” protected under Article 372 of the Indian
                    Constitution. Governed by a National Council with the
                    President as its Head, IEI fosters engineering excellence
                    and professional growth.
                  </li>
                  <li>
                    Through technical conferences, events, and networking
                    opportunities, IEI advances innovation and research in
                    engineering, equipping members with cutting-edge knowledge
                    and skills. The Institution upholds high ethical standards,
                    promoting the advancement of engineering across diverse
                    disciplines.
                  </li>
                </ul>
              </div>
              <div className="m-5 sm:m-0 order-1 flex items-center justify-end">
                <img src={ieiImg} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Aboutus;
