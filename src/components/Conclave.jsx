import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Conclave() {
  return (
    <div>
      <Navbar />
      <div>
        {/* Sponsorship Section */}
        <div className="Sponsorship border-2 border-black m-10 mx-auto p-6 rounded-3xl max-w-[80%]">
          <div className="px-6 font-bold text-lg">Sponsorship</div>
          <div className="flex flex-row p-3 gap-10">
            {/* Sponsorship Details */}
            <div className="flex flex-col w-full gap-4">
              {/* Platinum Sponsors */}
              <div className="flex flex-row items-stretch gap-6">
                <div className="border-2 border-black p-3 rounded-lg flex-grow">
                  <h3>Platinum Sponsors</h3>
                  <div className="px-4">
                    <li>Keynote address during the Conclave</li>
                    <li>Exhibit Stall space of 30 ft x 10 ft</li>
                    <li>Free registrations for 5 participants</li>
                  </div>
                </div>
                <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-[30%]">
                  <p className="text-center">₹ 2000<br />per participant</p>
                </div>
              </div>
              {/* Gold Sponsors */}
              <div className="flex flex-row items-stretch gap-6">
                <div className="border-2 border-black p-3 rounded-lg flex-grow">
                  <h3>Gold Sponsors</h3>
                  <div className="px-4">
                    <li>Presentation during the Conclave</li>
                    <li>Exhibit Stall space of 20 ft x 10 ft</li>
                    <li>Free registrations for 3 participants</li>
                  </div>
                </div>
                <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-[30%]">
                  <p className="text-center">₹ 1500<br />per participant</p>
                </div>
              </div>
              {/* Silver Sponsors */}
              <div className="flex flex-row items-stretch gap-6">
                <div className="border-2 border-black p-3 rounded-lg flex-grow">
                  <h3>Silver Sponsors</h3>
                  <div className="px-4">
                    <li>Exhibit Stall space of 10 ft x 10 ft</li>
                    <li>Free registrations for 2 participants</li>
                  </div>
                </div>
                <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-[30%]">
                  <p className="text-center">₹ 1000<br />per participant</p>
                </div>
              </div>
              {/* Associate Sponsors */}
              <div className="flex flex-row items-stretch gap-6">
                <div className="border-2 border-black p-3 rounded-lg flex-grow">
                  <h3>Associate Sponsors</h3>
                  <div className="px-4">
                    <li>Exhibit Stall space of 10 ft x 10 ft</li>
                    <li>Free registrations for 1 participant</li>
                  </div>
                </div>
                <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-[30%]">
                  <p className="text-center">₹ 500<br />per participant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Fee Section */}
        <div className="RegistrationFee border-2 border-black m-10 mx-auto p-6 rounded-3xl max-w-[80%]">
          <div className="px-6 text-lg font-bold">Registration Fee</div>
          <div className="flex flex-row p-3 gap-10">
            {/* Block-1 */}
            <div className="flex flex-col w-full gap-4">
              {/* Companies */}
              <div className="flex flex-row items-stretch gap-6">
                <div className="border-2 border-black p-3 rounded-lg flex-grow">
                  <span className="font-semibold">Companies</span>
                  <div>
                    Engineers, Technocrats, Decision-makers, Directors, CEOs, and others
                  </div>
                </div>
                <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-[30%]">
                  <div className="text-center">
                    ₹ 2000
                    <br />
                    <span>per participant</span>
                  </div>
                </div>
              </div>
              {/* Research Organizations */}
              <div className="flex flex-row items-stretch gap-6">
                <div className="border-2 border-black p-3 rounded-lg flex-grow">
                  <span className="font-semibold">Research Organizations & NGOs</span>
                  <div>
                    Scientists, Research Fellows, Scholars, Technologists, Non-Government
                    Organizations, etc.
                  </div>
                </div>
                <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-[30%]">
                  <div className="text-center">
                    ₹ 1500
                    <br />
                    <span>per participant</span>
                  </div>
                </div>
              </div>
              {/* Individual Registrations */}
              <div className="flex flex-row items-stretch gap-6">
                <div className="border-2 border-black p-3 rounded-lg flex-grow">
                  <span className="font-semibold">Individual Registrations</span>
                  <div>
                    Pioneer Investors, Venture Capitalists, Potential Entrepreneurs,
                    Technology Leaders, etc.
                  </div>
                </div>
                <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-[30%]">
                  <div className="text-center">
                    ₹ 1000
                    <br />
                    <span>per participant</span>
                  </div>
                </div>
              </div>
              {/* Academia */}
              <div className="flex flex-row items-stretch gap-6">
                <div className="border-2 border-black p-3 rounded-lg flex-grow">
                  <span className="font-semibold">Academia</span>
                  <div>Faculty from Academic Institutions</div>
                </div>
                <div className="border-2 border-black p-3 rounded-lg flex items-center justify-center w-[30%]">
                  <div className="text-center">
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
      <Footer />
    </div>
  )
}

export default Conclave