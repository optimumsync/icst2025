import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import nie_logo from '../assets/nie_logo.svg'
import fd_logo from '../assets/fd_logo.svg'
import ioe_logo from '../assets/ioe_logo.svg'

function Conclave() {
  return (
    <div>
      <Navbar />
      <div className="bg-gogreen shadow-md shadow-slate-700 p-3">
        <h1 className="text-center text-3xl md:text-5xl font-bold my-5 text-white">2nd INTERNATIONAL CONCLAVE ON SUSTAINABLE TECHNOLOGIES FOR MSME SECTOR</h1>
        <div className="font-semibold my-5 flex justify-center w-full">
          <div className="md:w-7/12 text-center z-10 text-white text-lg md:text-xl">
            19th and 20th February 2025
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-center items-stretch justify-center gap-10 my-10 mx-auto w-3/4">
          <div className="text-center flex flex-col items-center justify-center gap-3 bg-white mx-auto w-full md:w-1/3 p-5 border shadow-md">
            <div>Organized by :</div>
            <div><img src={nie_logo} alt="nie_logo" className="w-auto h-16" /></div>
            <div>The National Institute of Engineering</div>
          </div>

          <div className="text-center flex flex-col items-center justify-center gap-3 bg-white mx-auto w-full md:w-1/3 p-5 border shadow-md">
            <div>In Collaboration with :</div>
            <div><img src={fd_logo} alt="fd_logo" className="w-auto h-16" /></div>
            <div>FH Dortmund University Germany</div>
          </div>

          <div className="text-center flex flex-col items-center justify-center gap-3 bg-white mx-auto w-full md:w-1/3 p-5 border shadow-md">
            <div>Technically Co Sponsored by :</div>
            <div><img src={ioe_logo} alt="ioe_logo" className="w-auto h-16" /></div>
            <div>The Institution of Engineers(India), Mysuru Local Center.</div>
          </div>
        </div>

        <div className='text-center text-white text-lg md:text-xl'>
          <div>Venue :</div>
          <div>Diamond Jubilee Sports Complex, NIE, Mysore, India</div>
          <div>For Participation & registration, visit: icstnie2025.com</div>
        </div>
      </div>

      <div className='p-6 md:px-[50px] md:pb-1'>
        <p className='m-6 md:m-10'>In our rapidly evolving world, sustainable technology is becoming essential for addressing pressing environmental challenges. Non-renewable energy sources, while still prominent, are finite and contribute significantly to greenhouse gas emissions and climate change. Sustainable technology offers renewable and environmentally responsible alternatives that can reduce these impacts and support a healthier planet.</p>

        <p className='m-6 md:m-10'>The Clean Fuels International Conclave 2022, was organized by NIE on November 2-3 at Silent Shores Convention Centre in Mysuru, India. It was dedicated to exploring the theme of the evolving biofuel ecosystem in India and the growing investment opportunities within it. The event was further enriched by the valuable international collaborations established through partnerships with Tech4Fuels, OWI, and the FH Dortmund University of Applied Sciences and Arts.</p>

        <p className="m-6 md:m-10 bg-[#14532D] text-center w-[300px] ml-[40px] text-white font-bold text-[24px]">ICST 2025 Conclave</p>

        <p className='m-6 md:m-10'>Continuing the legacy, The International conclave on Sustainable technologies has been organized in Feb 2025. The ICST 2025 Conclave aims to address challenges within the sustainable technology landscape, including land allocation, feedstock supply chains, affordable financing, and innovative market creation. By bringing together global thought leaders, researchers, and industry experts, this event will facilitate meaningful discussions and propose solutions to accelerate the adoption of sustainable practices across various sectors, ultimately supporting the development of a resilient and eco-friendly future.</p>

        <p className='m-6 md:m-10'>We warmly invite all stakeholders committed to sustainable progress to participate in the International Conclave on Sustainable Technology (ICST 2025) σπ February 19th & 20th, 2025, in Mysuru, India. This global platform is dedicated to fostering discussions and collaborations among industry experts, policymakers, business leaders, academics, researchers, and educational pioneers in the field of sustainability</p>

        <p className='m-6 md:m-10'>Mysuru is an ideal host for ICST 2025, celebrated for its historical architecture, vibrant cultural heritage, and commitment to environmental cleanliness. Recognized as one of India's cleanest cities, Mysuru combines traditional charm with modern connectivity, making it accessible by air, rail, and road, Located amid lush agricultural and horticultural landscapes, Mysuru is also a rising industrial center, balancing historical legacy with contemporary innovation</p>

        <p className='m-6 md:m-10'>Join us in Mysuru to be part of meaningful dialogues, experience collaborative sessions, and witness groundbreaking innovations that shape the future of sustainable technology.
          For more details, visit: https://icstnie2025.com/home</p>
      </div>
      <div>
        {/* Sponsorship Section */}
        <div className="flex justify-center items-center w-full ">
          <div className="border-2 border-black m-6 md:m-10 mx-auto p-3 px-6 md:px-12 rounded-2xl max-w-[80%] w-full">
            <div className="px-6 font-bold text-2xl md:text-4xl text-[#145430]">Sponsorship</div>
            <div className="flex flex-col md:flex-row p-3 gap-6 md:gap-10">
              {/* Sponsorship Details */}
              <div className="flex flex-col w-full gap-4">
                {/* Platinum Sponsors */}
                <div className="flex flex-col md:flex-row items-stretch gap-6">
                  <div className="border-2 border-black p-3 rounded-lg flex-grow">
                    <h3 className='text-[#145430] text-xl md:text-2xl font-semibold'>Platinum Sponsors</h3>
                    <div className="px-4">
                      <li className='text-lg'>Keynote address during the Conclave</li>
                      <li className='text-lg'>Exhibit Stall space of 30 ft x 10 ft</li>
                      <li className='text-lg'>Free registrations for 5 participants</li>
                    </div>
                  </div>
                  <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-full md:w-[30%] ">
                    <p className="text-center text-xl md:text-2xl font-bold text-[#145430]  ">₹ 3 Lakhs<br />per participant</p>
                  </div>
                </div>
                {/* Gold Sponsors */}
                <div className="flex flex-col md:flex-row items-stretch gap-6">
                  <div className="border-2 border-black p-3 rounded-lg flex-grow">
                    <h3 className='text-[#145430] text-xl md:text-2xl font-semibold'>Gold Sponsors</h3>
                    <div className="px-4">
                      <li className='text-lg'>Presentation during the Conclave</li>
                      <li className='text-lg'>Exhibit Stall space of 20 ft x 10 ft</li>
                      <li className='text-lg'>Free registrations for 3 participants</li>
                    </div>
                  </div>
                  <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-full md:w-[30%] ">
                    <p className="text-center text-xl md:text-2xl font-bold text-[#145430] ">₹ 1 Lakh<br />per participant</p>
                  </div>
                </div>
                {/* Silver Sponsors */}
                <div className="flex flex-col md:flex-row items-stretch gap-6">
                  <div className="border-2 border-black p-3 rounded-lg flex-grow">
                    <h3 className='text-[#145430] text-xl md:text-2xl font-semibold'>Silver Sponsors</h3>
                    <div className="px-4">
                      <li className='text-lg'>Exhibit Stall space of 10 ft x 10 ft</li>
                      <li className='text-lg'>Free registrations for 2 participants</li>
                    </div>
                  </div>
                  <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-full md:w-[30%] ">
                    <p className="text-center text-xl md:text-2xl font-bold text-[#145430] ">₹ 50 Thousand<br />per participant</p>
                  </div>
                </div>
                {/* Associate Sponsors */}
                <div className="flex flex-col md:flex-row items-stretch gap-6">
                  <div className="border-2 border-black p-3 rounded-lg flex-grow">
                    <h3 className='text-[#145430] text-xl md:text-2xl font-semibold'>Associate Sponsors</h3>
                    <div className="px-4">
                      <li className='text-lg'>Exhibit Stall space of 10 ft x 10 ft</li>
                      <li className='text-lg'>Free registrations for 1 participant</li>
                    </div>
                  </div>
                  <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-full md:w-[30%] ">
                    <p className="text-center text-xl md:text-2xl font-bold text-[#145430] ">₹ 30 Thousand<br />per participant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Fee Section */}
        <div className="flex justify-center items-center w-full">
          <div className="border-2 border-black m-6 md:m-10 mx-auto p-3 px-6 md:px-12 rounded-2xl max-w-[80%] w-full">
            <div className="px-6 font-bold text-2xl md:text-4xl text-[#145430]">Registration Fee</div>
            <div className="flex flex-col md:flex-row p-3 gap-6 md:gap-10">
              {/* Block-1 */}
              <div className="flex flex-col w-full gap-4">
                {/* Companies */}
                <div className="flex flex-col md:flex-row items-stretch gap-6">
                  <div className="border-2 border-black p-3 rounded-lg flex-grow">
                    <span className="font-semibold text-[#145430] text-xl md:text-2xl ">Companies</span>
                    <div className='text-lg'>
                      Engineers, Technocrats, Decision-makers, Directors, CEOs, and others
                    </div>
                  </div>
                  <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-full md:w-[30%] ">
                    <div className="text-center text-xl md:text-2xl font-bold text-[#145430] ">
                      ₹ 2000
                      <br />
                      <span>per participant</span>
                    </div>
                  </div>
                </div>
                {/* Research Organizations */}
                <div className="flex flex-col md:flex-row items-stretch gap-6">
                  <div className="border-2 border-black p-3 rounded-lg flex-grow">
                    <span className="font-semibold text-[#145430] text-xl md:text-2xl ">Research Organizations & NGOs</span>
                    <div className='text-lg'>
                      Scientists, Research Fellows, Scholars, Technologists, Non-Government
                      Organizations, etc.
                    </div>
                  </div>
                  <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-full md:w-[30%] ">
                    <div className="text-center text-xl md:text-2xl font-bold text-[#145430] ">
                      ₹ 1500
                      <br />
                      <span>per participant</span>
                    </div>
                  </div>
                </div>
                {/* Individual Registrations */}
                <div className="flex flex-col md:flex-row items-stretch gap-6">
                  <div className="border-2 border-black p-3 rounded-lg flex-grow">
                    <span className="font-semibold text-[#145430] text-xl md:text-2xl ">Individual Registrations</span>
                    <div className='text-lg'>
                      Pioneer Investors, Venture Capitalists, Potential Entrepreneurs,
                      Technology Leaders, etc.
                    </div>
                  </div>
                  <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-full md:w-[30%] ">
                    <div className="text-center text-xl md:text-2xl font-bold text-[#145430] ">
                      ₹ 1000
                      <br />
                      <span>per participant</span>
                    </div>
                  </div>
                </div>
                {/* Academia */}
                <div className="flex flex-col md:flex-row items-stretch gap-6">
                  <div className="border-2 border-black p-3 rounded-lg flex-grow">
                    <span className="font-semibold text-[#145430] text-xl md:text-2xl ">Academia</span>
                    <div className='text-lg'>Faculty from Academic Institutions</div>
                  </div>
                  <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-full md:w-[30%] ">
                    <div className="text-center text-xl md:text-2xl font-bold text-[#145430] ">
                      ₹ 500
                      <br />
                      <span>per participant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Conclave