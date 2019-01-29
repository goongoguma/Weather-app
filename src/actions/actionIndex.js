import api from "../api/api";

// actions

export const fetchWeather = term => {
  return async dispatch => {
    const res = await api.get(
      `/data/2.5/weather?q=${term}&APPID=30fa45291c64bdfda54128e6e69b6714&units=metric`
    );
    dispatch({ type: "FETCH_WEATHER", payload: res.data });
  };
};

export const listDelete = id => {
  return {
    type: "LIST_DELETE",
    payload: id
  };
};
