import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchResultsPage';

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <Navbar />
      <div style={styles.homeContainer}>
        <h1>Girman Technologies</h1>
        <SearchBox query={query} setQuery={setQuery} onSearch={handleSearch} />
      </div>
    </>
  );
};

const styles = {
  homeContainer: {
    textAlign: 'center',
    marginTop: '10%',
  },
};

export default Home;
