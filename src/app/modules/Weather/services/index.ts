import { combineReducers } from "@reduxjs/toolkit";

import weatherInfo from "./weatherInfo";

const weather = combineReducers({
  weatherInfoService: weatherInfo,
});

export default weather;
