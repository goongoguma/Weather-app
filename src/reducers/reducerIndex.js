import { combineReducers } from "redux";

const reducerIndex = (state = [], action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return [...state, action.payload];
    case "LIST_DELETE":
      return [...state.filter(city => city.id !== action.payload)];
    default:
      return state;
  }
};

export default combineReducers({
  reducerIndex
});
