import React from 'react';
import Bar from '../components/Bar';
import CountriesList from '../components/CountriesList';
import Continent from '../components/Continent';

function Home() {
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
