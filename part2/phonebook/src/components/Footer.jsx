import React from 'react';

const Footer = () => {
  return (
    <div style={{ fontSize: '1rem', color: 'red' }}>
      <p style={{ color: 'blue' }}>
        <em>This phonebook app </em>was design by Muhammad Bashir ibrahim
      </p>
      <p>copyright {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
