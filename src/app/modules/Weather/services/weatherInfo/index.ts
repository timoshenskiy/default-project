import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "app/services/store";

interface WeatherInfoState {
  data: unknown;
  loading: unknown;
  error: unknown;
  cities: unknown;
}

const initialState: WeatherInfoState = {
  data: null,
  loading: false,
  error: null,
  cities: [
    {
      id: 1,
      name: "Moscow",
      latitude: "55.7522",
      longitude: "37.6156",
    },
    {
      id: 2,
      name: "London",
      latitude: "51.5073",
      longitude: "-0.1277",
    },
    {
      id: 3,
      name: "Paris",
      latitude: "48.8566",
      longitude: "2.3522",
    },
    {
      id: 4,
      name: "Rome",
      latitude: "41.9027",
      longitude: "12.4963",
    },
    {
      id: 5,
      name: "New York",
      latitude: "40.7127",
      longitude: "-74.0059",
    },
  ],
};

const slice = createSlice({
  name: "weather/info",
  initialState,
  reducers: {
    getWeatherInfoRequest: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    getWeatherInfoSuccess: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    getWeatherInfoError: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export const { actions: weatherInfoActions } = slice;

export const weatherInfoSelector = (state: AppState) =>
  state.weather.weatherInfoService;

export default slice.reducer;
