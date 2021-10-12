const initialState = [];
const FETCH_DATA = 'countries/FETCH_DATA';
const UPDATE_STATE = 'countries/UPDATE_STATE';

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

export const selectCountry = (name) => ({
  type: UPDATE_STATE,
  payload: name,
});

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case UPDATE_STATE:
      return state.map((obj) => {
        if (obj.name === action.payload) {
          return { ...obj, selected: true };
        }
        return obj;
      });
    default:
      return state;
  }
};
