import { Check } from 'lucide-react';
import treeImage from '../assets/tree.jpg';
import globalImage from '../assets/global2.svg';
import leafImage from '../assets/leaf1.jpg';
import arrowImage from '../assets/arrow.png';
import Navbar from './Navbar';
import Footer from './Footer';

const Registration = () => {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold font-serif text-center text-[#2B5B3E] mb-16">Registration</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-green-800 text-white p-8 rounded-2xl border-2 border-[#2B5B3E] relative h-[400px]">
            <h2 className="text-2xl font-bold mb-4 text-center">Category</h2>
            <img src={arrowImage} alt="arrow" className=" w-10 h-10 mx-auto absolute left-0" />

            <p className="text-sm mb-8 text-center">* 10% off for IEI Members</p>
            <br/>

            <div className='bottom-0'>
                <img
                  src={globalImage}
                  alt="Tree"
                  className="w-150 h-150 absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
            </div>
          </div>

          {/* Registration Cards */}
          {[
            {
              title: "Academic",
              description: "UG/PG/PhD Scholar/Faculty from India",
              price: "₹ 6000",
            },
            {
              title: "Industry",
              description: "Industry Professional from India             ",
              price: "₹ 7500",
            },
            {
              title: "Non-resident",
              description:"Foreign Authors (UG/PG/PhD Scholar/Faculty/Industry)",
              price: "$ 200",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#2B5B3E] rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-2 mb-6">
                <div className="rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <img src={leafImage} alt="Tree" className=" w-10 h-10 mx-auto" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              <div className="flex items-start gap-2 mb-8 text-gray-600">
                <Check className="w-5 h-5 text-[#2B5B3E] flex-shrink-0" />
                <p>{card.description}</p>
              </div>
              <div className="border-t border-dashed border-grey-800 my-4" />
              <br/>
              <br/>
              <p className="text-2xl font-bold mb-6">{card.price}</p>
              
              <button className="w-full bg-green-800 text-white py-3 rounded-xl hover:bg-[#234832] transition-colors">
                Choose
              </button>
            </div>
          ))}
        </div>
        <div className="mt-5 border-2 border-dashed border-black"></div>
        <br/>

        {/* Additional Information */}
        <section className="rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-[#2B5B3E] mb-8">Additional Information</h2>
          <div className="max-w-3xl text-align-left space-y-6">
            <p className="font-medium">*All the pricing details mentioned above are inclusive of 18% GST.</p>

            <div>
              <h3 className="font-bold text-black mb-2">Accommodation Fees</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Indian participants: INR 1000 per person per day</li>
                <li>Foreign participants: USD 20 per person per day</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-black mb-2">Account Details</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Beneficiary Name: The National Institute of Engineering</li>
                <li>Bank Name: HDFC Bank Ltd.</li>
                <li>Account No: 50100243056071</li>
                <li>RTGS/NEFT IFSC: HDFOOO2568</li>
                <li>Account Branch: K R Mohalla-Mysuru</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-2">Instructions for Registration</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>At least one author per accepted paper has to register.</li>
                <li>
                  At least one author must present their accepted paper in the conference for consideration of publication
                  on IEI Explore.
                </li>
                <li>
                  Registration fee for the paper (with authorship) includes access to conference proceedings, all technical
                  sessions, and a presenter certificate.
                </li>
                <li>
                  Registration fee for conference participation without authorship; attendees are not entitled to paper
                  publication; however, a participation certificate will be provided.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-5 border-2 border-dashed border-black"></div>
        <br/>
        <h2 className="text-3xl font-bold text-center text-[#2B5B3E] mb-8">Important Dates</h2>
        <div className="flex justify-center items-center h-screen">
  <img src={treeImage} alt="Tree" className="w-200 h-[800px]" /> {/* Use the imported tree.jpg image */}
</div>

      </main>
      <Footer />
    </div>
  );
          
};
export default Registration;

