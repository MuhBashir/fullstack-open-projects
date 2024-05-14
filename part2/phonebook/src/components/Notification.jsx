import React from 'react';

const Notification = ({ message }) => {
  // const notificationStyle = {
  //   border: '2px solid green',
  //   boderRadius: '10px',
  //   width: '100%',
  //   padding: '2px',
  // };

  if (message === null) {
    return null;
  }
  return (
    <div className='error'>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
