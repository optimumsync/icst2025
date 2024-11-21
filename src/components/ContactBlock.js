// contactBlock.js
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
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
      {phone && (
        <p>
          <strong>Phone:</strong> {Array.isArray(phone) ? phone.join(', ') : phone}
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
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#2d572c',
    marginBottom: '10px',
  },
};

export default ContactBlock;
