import React, { useEffect } from 'react';
import Bar from '../components/Bar';
import CountriesList from '../components/CountriesList';
import Continent from '../components/Continent';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/countries/countries';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <Bar />
      <div className="continent">
        <Continent />
      </div>
      <CountriesList />
    </div>
  );
}

export default Home;
