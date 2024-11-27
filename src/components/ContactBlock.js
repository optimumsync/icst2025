// ContactBlock.js
import React from 'react';

const ContactBlock = ({ title, email, phone, officeHours, address, location }) => {
  return (
    <div style={styles.block}>
      <h3 style={styles.title}>{title}</h3>
      {location && <p><strong>Location:</strong> {location}</p>}
      {address && <p><strong>Address:</strong> {address}</p>}
      {email && (
        <p>
          <strong>Email:</strong> <a href={`mailto:${email}`} style={styles.link}>{email}</a>
        </p>
      )}
      {phone && (
        <p>
          <strong>Phone:</strong> {Array.isArray(phone) ? phone.join(' | ') : phone}
        </p>
      )}
      {officeHours && <p><strong>Office Hours:</strong> {officeHours}</p>}
    </div>
  );
};

const styles = {
  block: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#3C5E4B',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#ffffff',
  },
  title: {
    color: '#ffffff',
    fontSize: '18px',
    marginBottom: '10px',
  },
  link: {
    color: '#00bfff',
    textDecoration: 'underline',
  },
};

export default ContactBlock;
