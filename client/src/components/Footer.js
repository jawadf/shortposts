import React from 'react';


const Footer = () => {
  const style = {
    backgroundColor: '#18181d',
    height: '2.3rem',
    width: '100vw',
    color: '#fff',
    fontSize: '1.6rem',
    textAlign: 'center',
    zIndex: '99',
    position: 'fixed',
    bottom: '0'
  };

  return <div style={style}>Developed by Jawad F.</div>;
};

export default Footer;