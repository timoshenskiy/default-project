"use client";

import React, { useEffect, useState } from "react";
import { Collapse as ReactCollapse } from "react-collapse";
import dayjs from "dayjs";
import S from "./styles";
import { weatherInfoSelector } from "./services/weatherInfo";
import { getWeatherInfo } from "./services/weatherInfo/actions";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import {
  CityInterface,
  WeatherInfoInterface,
} from "./services/weatherInfo/interface";
import { WEATHER_ICONS, CITY_ICONS, CHECK_ICON } from "./icons";

const TITLE = "Current city:";
const STATIC_DATA = {
  columns: {
    temperature: "Temperature",
    date: "Date",
    wind: "Wind",
  },
};
const getCurrentWeatherIcon = (weatherData: WeatherInfoInterface) => {
  const isDay = weatherData?.current?.is_day;
  const isCloudCover = weatherData?.current?.cloud_cover;
  const isRain = weatherData?.current?.rain;
  const isSnow = weatherData?.current?.snowfall;

  if (isRain) {
    return WEATHER_ICONS.rain;
  }

  if (isSnow) {
    return WEATHER_ICONS.snow;
  }

  if (isCloudCover) {
    return isDay ? WEATHER_ICONS.cloudySunny : WEATHER_ICONS.cloudyMoon;
  }

  if (isDay) {
    return WEATHER_ICONS.sunny;
  }

  return WEATHER_ICONS.moon;
};

const getTemperatureValue = (weatherData: WeatherInfoInterface) => {
  const temperatureNumber = weatherData?.current?.temperature_2m;
  const temperatureUnit = weatherData?.current_units?.temperature_2m;

  if (temperatureNumber && temperatureUnit) {
    return `${temperatureNumber} ${temperatureUnit}`;
  }

  return "_";
};

const getDateValue = (weatherData: WeatherInfoInterface) => {
  const date = weatherData?.current?.time;

  if (date) {
    return dayjs(date).format("DD MMM YYYY");
  }

  return "_";
};

const getWindValue = (weatherData: WeatherInfoInterface) => {
  const temperatureNumber = weatherData?.current?.wind_speed_10m;
  const temperatureUnit = weatherData?.current_units?.wind_speed_10m;

  if (temperatureNumber && temperatureUnit) {
    return `${temperatureNumber} ${temperatureUnit}`;
  }

  return "_";
};

const renderTitle = (
  isOpened: boolean,
  setIsOpened: (value: boolean) => void,
  cities: CityInterface[],
  currentCity: CityInterface | null,
  setCurrentCity: (city: any) => void,
  isDay: boolean
) => {
  const currentCityName = currentCity?.name;

  return (
    <S.Title>
      {TITLE}
      <S.CitySelectWrapper>
        <S.CitySelect onClick={() => setIsOpened(!isOpened)} isDay={isDay}>
          {currentCityName}
          <S.Collapse isOpened={isOpened}>
            <ReactCollapse isOpened={isOpened}>
              <S.CityList>
                {cities.map((city) => {
                  const { name } = city;

                  return (
                    <S.CityName onClick={() => setCurrentCity(city)} key={name}>
                      {name}
                    </S.CityName>
                  );
                })}
              </S.CityList>
            </ReactCollapse>
            <S.CollapseIconWrapper isOpened={isOpened}>
              {CHECK_ICON}
            </S.CollapseIconWrapper>
          </S.Collapse>
        </S.CitySelect>
      </S.CitySelectWrapper>
    </S.Title>
  );
};

const getCurrentCityIcon = (currentCity: any) => {
  const iconKey = `id-${currentCity?.id}`;

  return CITY_ICONS[iconKey as keyof typeof CITY_ICONS] || CITY_ICONS["id-1"];
};
const Weather = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);
  const dispatch = useAppDispatch();
  const { data: weatherData, cities } = useAppSelector(weatherInfoSelector);
  useEffect(() => {
    setCurrentCity(cities[0]);
  }, [cities]);

  useEffect(() => {
    if (currentCity) {
      const { latitude, longitude }: CityInterface = currentCity;
      dispatch(getWeatherInfo(latitude, longitude));
    }
  }, [currentCity, dispatch]);

  if (weatherData) {
    const temperature = getTemperatureValue(weatherData);
    const date = getDateValue(weatherData);
    const wind = getWindValue(weatherData);
    const currentWeatherIcon = getCurrentWeatherIcon(weatherData);
    const currentCityIcon = getCurrentCityIcon(currentCity);
    const isDay = weatherData?.current?.is_day === 1;

    return (
      <S.Container>
        {renderTitle(
          isOpened,
          setIsOpened,
          cities,
          currentCity,
          setCurrentCity,
          isDay
        )}
        <S.Plate isDay={isDay}>
          <S.WeatherSvgWrapper>{currentWeatherIcon}</S.WeatherSvgWrapper>
          <S.Cell key={STATIC_DATA.columns.temperature}>
            <S.CellTitle>{STATIC_DATA.columns.temperature}</S.CellTitle>
            <S.CellValue>{temperature}</S.CellValue>
          </S.Cell>
          <S.Cell key={STATIC_DATA.columns.date}>
            <S.CellTitle>{STATIC_DATA.columns.date}</S.CellTitle>
            <S.CellValue>{date}</S.CellValue>
          </S.Cell>
          <S.Cell key={STATIC_DATA.columns.wind}>
            <S.CellTitle>{STATIC_DATA.columns.wind}</S.CellTitle>
            <S.CellValue>{wind}</S.CellValue>
          </S.Cell>
          <S.CitySvgWrapper>{currentCityIcon}</S.CitySvgWrapper>
        </S.Plate>
      </S.Container>
    );
  }

  return null;
};

export default Weather;
