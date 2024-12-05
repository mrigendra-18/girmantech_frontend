import  { useState } from 'react';
import DetailsModal from './DetailsModal';

const UserCard = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '250px',
      textAlign: 'center'
    }}>
      <img src="https://via.placeholder.com/150" alt="User" style={{ borderRadius: '50%' }} />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.city}</p>
      <button onClick={() => setShowModal(true)} style={{ padding: '8px 16px', marginTop: '10px' }}>Fetch Details</button>

      {showModal && <DetailsModal user={user} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default UserCard;
