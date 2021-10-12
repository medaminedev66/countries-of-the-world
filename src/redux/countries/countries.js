const initialState = [];
const FETCH_DATA = 'countries/FETCH_DATA';

export const fetchData = () => async (dispatch) => {
  const response = await fetch();
  const data = await response.json();
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return state;
    default:
      return state;
  }
};
