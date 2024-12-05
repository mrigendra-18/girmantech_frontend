

const DetailsModal = ({ user, onClose }) => (
  <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px'
  }}>
    <h2>{user.first_name} {user.last_name}</h2>
    <p>City: {user.city}</p>
    <p>Contact: {user.contact_number}</p>
    <button onClick={onClose} style={{ marginTop: '10px', padding: '8px 16px' }}>Close</button>
  </div>
);

export default DetailsModal;
