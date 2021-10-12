const initialState = [];
const FETCH_DATA = 'countries/FETCH_DATA';

export const fetchData = () => async (dispatch) => {
  console.log('fetching');
  const response = await fetch('https://restcountries.com/v2/all');
  const data = await response.json();
  console.log(data);
  dispatch({
    type: FETCH_DATA,
    payload: data,
  });
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};
