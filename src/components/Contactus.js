// ContactUs.js
import React from 'react';
import ContactBlock from './ContactBlock';

const ContactUs = () => {
  const contactSections = [
    {
      title: 'General Inquiries',
      email: 'icst-nie2025+general@nie.ac.in',
      phone: ['+91 99726 95511', '+91 81504 73206', '+91 98606 03195'],
      officeHours: 'Monday to Saturday, 9:00 AM to 5:00 PM (IST)',
    },
    {
      title: 'Paper Submission Queries',
      email: 'icst-nie2025+submissions@nie.ac.in',
      phone: ['+91 95351 44563', '+91 98606 03195'],
    },
    {
      title: 'Sponsorship and Exhibitor Opportunities',
      email: 'icst-nie2025+sponsors@nie.ac.in',
      phone: '+91 99726 95511',
    },
    {
      title: 'Venue Information',
      location: 'The National Institute of Engineering (NIE), Mysuru, Karnataka, India',
      address: `The National Institute of Engineering,
                Manandavadi Road, Vidyaranyapura,
                Mysuru, Karnataka, India - 570008`,
      phone: '+91 821 248 1220',
    },
    {
      title: 'Accommodation and Travel Assistance',
      email: 'icst-nie2025+hospitality@nie.ac.in',
      phone: '+91 77950 00707',
    },
    {
      title: 'Registration Support',
      email: 'icst-nie2025+registration@nie.ac.in',
      phone: '+91 76673 06024',
    },
  ];

  return (
    <div className='h-full w-full p-10'>
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      <p style={styles.intro}>
        We welcome all inquiries regarding the International Conference on Sustainable Technology and Conclave. 
        Whether you need more information about the event, have questions about your submission, or require assistance 
        with registration, we are here to help.
      </p>
      {contactSections.map((section, index) => (
        <ContactBlock key={index} {...section} />
      ))}
      <footer style={styles.footer}>
        <p>We look forward to your participation in the International Conference on Sustainable Technology and Conclave. If you have any other questions or need further assistance, please do not hesitate to contact us.</p>
        <p>&copy; 2024 NIE</p>
      </footer>
    </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '30px auto',
    padding: '20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    
  },
  header: {
    textAlign: 'center',
    color: '#2d572c',
    marginBottom: '20px',
    fontSize: '24px',
    textDecoration: 'bold',
  },
  intro: {
    marginBottom: '20px',
    fontSize: '16px',
    lineHeight: '1.8',
    textAlign: 'center',

  },
  footer: {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '14px',
    color: '#555',
  },

};

export default ContactUs;
