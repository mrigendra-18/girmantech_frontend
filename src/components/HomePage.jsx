import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Navbar />
      <h1>Welcome to Girman Technologies</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search users..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          style={{ padding: '8px', width: '300px' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '8px 16px' }}>Search</button>
      </form>
      
    </div>
    
  );
};

export default HomePage;
