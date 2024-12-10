import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactSection = ({ title, content, email, phone, extraContent }) => (
  <div className="flex flex-col lg:flex-row border-t-2 border-[#145430] p-2 md:p-6 last:border-b">
    {/* Title section with increased width */}
    <div className="text-[#145430] font-semibold text-2xl lg:text-3xl uppercase text-center py-4 px-6 border-r-0 lg:border-r-2 border-[#145430] w-full lg:w-80 flex items-center justify-center mb-4 lg:mb-0">
      {title}
    </div>

    {/* Content section */}
    <div className="flex-1 lg:pl-8">
      <div className="text-black text-base lg:text-lg">
        <p className="mb-4">{content}</p>
        {email && (
          <p className="mb-4">
            <strong>Email:</strong>{' '}
            <a
              href={`mailto:${email}`}
              className="underline hover:text-[#145430]"
              aria-label={`Email: ${email}`}
            >
              {email}
            </a>
          </p>
        )}
        {phone && (
  <div className="mb-4">
    <strong>Phone:</strong>
    {Array.isArray(phone) ? (
      <div className="inline">
        <span className="underline">{phone[0]}</span>
        {phone.slice(1).map((num, index) => (
          <div key={index} className="ml-[52px] md:ml-[59px] underline ">{num}</div>
        ))}
      </div>
    ) : (
      <span className="underline">{phone}</span>
    )}
  </div>
)}


        {extraContent && <div className="mt-4 text-gray-700">{extraContent}</div>}
      </div>
    </div>
  </div>
);

const contactDetails = [
  {
    title: 'General Inquiries',
    content:
      'For general questions about the conference, including program details, schedules, or participation opportunities, please reach out to us:',
    email: 'icst-nie2025+general@nie.ac.in',
    phone: ['+91 99726 95511', '+91 81054 73206', '+91 98606 03195'],
    extraContent: (
      <p>
        <strong>Office Hours:</strong> Monday to Saturday, 9:00 AM to 5:00 PM (IST)
      </p>
    ),
  },
  {
    title: 'Paper Submission Queries',
    content:
      'If you have questions related to paper submissions, guidelines, or the review process, please contact our Paper Submission Committee:',
    email: 'icst-nie2025+submissions@nie.ac.in',
    phone: ['+91 95351 44563', '+91 98606 03195'],
  },
  {
    title: 'Sponsorship',
    content:
      'Interested in sponsoring or exhibiting at the conference? Contact our Sponsorship Chair for more details:',
    email: 'icst-nie2025+sponsors@nie.ac.in',
    phone: '+91 99726 95511',
  },
  {
    title: 'Venue Information',
    content: (
      <>
        Location: The National Institute of Engineering (NIE), Mysuru, Karnataka, India
        <br />
        <strong>Address:</strong>
        <br />
        The National Institute of Engineering, <br />
        Manandavadi Road, <br />
        Vidyaranyapura, <br />
        Mysuru, Karnataka, <br />
        India - 570008
      </>
    ),
    phone: '+91 821 248 1220',
  },
  {
    title: 'Accommodation and Travel Assistance',
    content:
      'For assistance with hotel accommodations, travel arrangements, or any other logistical support, please reach out to our Hospitality Committee:',
    email: 'icst-nie2025+hospitality@nie.ac.in',
    phone: '+91 77950 00707',
  },
  {
    title: 'Registration Support',
    content:
      'If you encounter any issues or have questions regarding conference registration, please contact our Registration Committee:',
    email: 'icst-nie2025+registration@nie.ac.in',
    phone: '+91 76673 06024',
  },
];

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-8 px-4 lg:py-12 lg:px-6 self-center">
        <div className="max-w-7xl mx-auto md:mx-20">
          <h1 className="text-3xl lg:text-3xl font-semibold text-center mb-6 lg:mb-8 bg-gradient-to-r from-[#ffffff] via-[#28543e] to-[#00381a] bg-clip-text text-transparent">
            Contact Us
          </h1>

          <p className="text-center font-medium lg:font-semibold text-base lg:text-lg text-[#145430] mb-6 lg:mb-8">
            We welcome all inquiries regarding the International Conference on Sustainable
            Technology and Conclave. Whether you need more information about the event, have
            questions about your submission, or require assistance with registration, we are
            here to help.
          </p>

          {/* Render Contact Sections */}
          {contactDetails.map((detail, index) => (
            <ContactSection key={index} {...detail} />
          ))}

          <p className="mt-2 lg:mt-2 text-center font-medium lg:font-semibold text-base lg:text-lg text-[#145430] border-t-2 border-[#145430] pt-4">
            We look forward to your participation in the International Conference on Sustainable
            Technology and Conclave. If you have any other questions or need further assistance,
            please do not hesitate to contact us.
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
