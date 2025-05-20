import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.link/ldniux" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloat;