import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Bar from '../components/Bar';
import CountriesList from '../components/CountriesList';
import { fetchData } from '../redux/countries/countries';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <Bar title="All countries" />
      <CountriesList />
    </div>
  );
}

export default Home;
