import  { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import data from '../data/user_list.json';
import UserCard from './UserCard';
import Navbar from './Navbar';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const results = data.filter(user =>
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(results);
  }, [query]);

  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Search Results</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => <UserCard key={index} user={user} />)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
