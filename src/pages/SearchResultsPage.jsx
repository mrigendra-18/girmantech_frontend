import  { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchResults from '../components/UserCard';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = searchParams.get('q');

  useEffect(() => {
    fetch(`http://localhost:8000/api/users?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [query]);

  return (
    <>
      <Navbar />
      <SearchResults data={data} loading={loading} />
    </>
  );
};

export default SearchResultsPage;
