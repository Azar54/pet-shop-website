// src/components/WhatsAppChat.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppChat = () => {
  const phoneNumber = '9489824715'; // Replace with your WhatsApp number in international format
  const message = "I'm interested in your services";

  const handleChatClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={styles.chatContainer}>
      <button style={styles.chatButton} onClick={handleChatClick}>
        <FontAwesomeIcon icon={faWhatsapp} style={styles.icon} />
      </button>
    </div>
  );
};

const styles = {
  chatContainer: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: 1000,
  },
  chatButton: {
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '48px',
  },
};

export default WhatsAppChat;
