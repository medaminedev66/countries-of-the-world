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

  const select = (type) => {
    switch (type) {
      case 'population':
        return 'population';
      default:
        break;
    }
    return undefined;
  };

  const selectBy = select();
  return (
    <div>
      <Bar title="All countries" select={select} />
      <CountriesList select={selectBy} />
    </div>
  );
}

export default Home;
