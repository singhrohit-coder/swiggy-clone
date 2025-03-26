

const WhatsAppButton = () => {
  const phoneNumber = '9870244974'; // Replace with your WhatsApp phone number in international format
  const message = 'Hello,%20I%20need%20help%20with%20your%20website.'; // Optional pre-filled message

  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button style={styles.button}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={styles.icon}
        />
      </button>
    </a>
  );
};

const styles = {
  button: {
    marginRight: '16px',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    padding: '2px 2px',
    borderRadius: '5px',
    fontSize: '20px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000, // Ensure the button appears above other content
  },
  icon: {
    width: '50px',
    height: '40px',
    marginRight: '1px',
  },
};

export default WhatsAppButton;
