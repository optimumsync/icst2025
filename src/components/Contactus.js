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
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      <p style={styles.intro}>
        We welcome all inquiries regarding the International Conference on Sustainable Technology and Conclave.
      </p>
      {contactSections.map((section, index) => (
        <ContactBlock key={index} {...section} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    color: '#2d572c',
  },
  intro: {
    marginBottom: '20px',
    textAlign: 'center',
  },
};

export default ContactUs;
