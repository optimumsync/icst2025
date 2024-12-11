import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import fileu from '../assets/conclave.pdf'

const FileDownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = '../assets/conclave.pdf'; // Replace with your file path in the assets folder
    const link = document.createElement('a');
    link.href = fileu;
    link.download = 'Conclave.pdf'; // Replace with the desired download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>Download Broucher</button>
  );
};

function Conclave() {
  return (
    <div className=''>
        <Navbar/>
        <div className='min-h-96'>
          <h2 className='m-3 text-gogreen text-2xl font-bold text-center'>Conclave</h2>
          <p className='m-3 md:mx-36 md:my-15 text-justify'>Continuing the legacy, The International conclave on Sustainable technologies has been organized in Feb 2025. The ICST 2025 Conclave aims to address challenges. within the sustainable technology landscape, including land allocation, feedstock supply chains, affordable financing, and innovative market creation. By bringing together global thought leaders, researchers, and industry experts, this event will facilitate meaningful discussions and propose solutions to accelerate the adoption of sustainable practices across various sectors, ultimately supporting the development of a resilient and eco-friendly future.
          We warmly invite all stakeholders committed to sustainable progress to participate in the International Conclave on Sustainable Technology (ICST 2025) on February 19th & 20th, 2025, in Mysuru, India. This global platform is dedicated to fostering discussions and collaborations among industry experts, policymakers, business leaders, academics, researchers, and educational pioneers in the field of sustainability.</p>
          <div className="flex justify-center m-2"><div className='bg-green-700 p-2 text-white rounded-md'><FileDownloadButton/></div></div>
        </div>
        <Footer/>
        </div>
  )
}

export default Conclave