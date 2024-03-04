import { AppThunk } from "app/services/store";

import { apiGetWeatherInfo } from "./api";
import { weatherInfoActions } from "./index";
import { WeatherInfoInterface } from "./interface";

export const getWeatherInfo =
  (lat: string, lon: string): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(weatherInfoActions.getWeatherInfoRequest());

      const { data }: WeatherInfoInterface | any = await apiGetWeatherInfo(
        lat,
        lon
      );

      dispatch(weatherInfoActions.getWeatherInfoSuccess(data));
    } catch (error) {
      dispatch(weatherInfoActions.getWeatherInfoError(error));
      console.error(error);
    }
  };
