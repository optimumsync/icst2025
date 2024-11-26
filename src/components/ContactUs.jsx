import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactSection = ({ title, content, email, phone, extraContent }) => (
    <div className="flex border-t border-[#3C5E4B] p-6 ">
      {/* Title section with a fixed width */}
      <div className="text-[#3C5E4B] font-bold text-lg uppercase text-center py-2 border-r border-[#3C5E4B] w-48">
        {title}
      </div>
  
      {/* Content section */}
      <div className="flex-1 pl-6">
        <div className="text-gray-800">
          <p className="mb-2">{content}</p>
          {email && (
            <p className="mb-2">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${email}`} className="text-[#3C5E4B] hover:underline">
                {email}
              </a>
            </p>
          )}
          {phone && (
            <div>
              <strong>Phone:</strong>
              {Array.isArray(phone) ? (
                <ul className="list-disc list-inside pl-6 mt-1">
                  {phone.map((num, index) => (
                    <li key={index}>{num}</li>
                  ))}
                </ul>
              ) : (
                <span> {phone}</span>
              )}
            </div>
          )}
          {extraContent && (
            <div className="mt-4 text-gray-700">
              {extraContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
  

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-green-800">
            Contact Us
          </h1>
          <p className="text-center text-gray-700 mb-8">
            We welcome all inquiries regarding the International Conference on Sustainable Technology and Conclave. Whether you need more
            information about the event, have questions about your submission, or require assistance with registration, we are here to help.
          </p>

          <ContactSection
            title="General Inquiries"
            content="For general questions about the conference, including program details, schedules, or participation opportunities, please reach out to us:"
            email="icst-nie2025+general@nie.ac.in"
            phone={["+91 99726 95511", "+91 81054 73206", "+91 98606 03195"]}
            extraContent={
            <p>
                <strong>Office Hours:</strong> Monday to Saturday, 9:00 AM to 5:00 PM (IST)
            </p>
            }
        />


          <ContactSection
            title="Paper Submission Queries"
            content="If you have questions related to paper submissions, guidelines, or the review process, please contact our Paper Submission Committee:"
            email="icst-nie2025+submissions@nie.ac.in"
            phone={["+91 95351 44563", "+91 98606 03195"]}
          />

          <ContactSection
            title="Sponsorship"
            content="Interested in sponsoring or exhibiting at the conference? Contact our Sponsorship Chair for more details:"
            email="icst-nie2025+sponsors@nie.ac.in"
            phone="+91 99726 95511"
          />

          <ContactSection
            title="Venue Information"
            content={`Location: The National Institute of Engineering (NIE), Mysuru, Karnataka, India\n\nAddress:\nThe National Institute of Engineering, \nManandavadi Road, \nVidyaranyapura, \nMysuru, Karnataka, \nIndia - 570008`}
            phone="+91 821 248 1220"
          />

          <ContactSection
            title="Accommodation and Travel Assistance"
            content="For assistance with hotel accommodations, travel arrangements, or any other logistical support, please reach out to our Hospitality Committee:"
            email="icst-nie2025+hospitality@nie.ac.in"
            phone="+91 77950 00707"
          />

          <ContactSection
            title="Registration Support"
            content="If you encounter any issues or have questions regarding conference registration, please contact our Registration Committee:"
            email="icst-nie2025+registration@nie.ac.in"
            phone="+91 76673 06024"
          />

          <p className="mt-4 text-gray-700 border-t border-[#3C5E4B] pt-2">
            We look forward to your participation in the International Conference on Sustainable Technology and Conclave. If you have any other
            questions or need further assistance, please do not hesitate to contact us.
          </p>
        </div>
      </main>
      <div className="w-full bg-gray-900">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
