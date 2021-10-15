const initialState = [{ selectedBy: 'name' }];
const SELECT_BY = 'settings/SELECT_BY';

export const selectedBy = (type) => ({ type: SELECT_BY, payload: type });

export const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BY:
      return [{ selectBy: action.payload }];
    default:
      return state;
  }
};
