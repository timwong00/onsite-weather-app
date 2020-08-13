import {
  OpenWeatherCurrentTemperature,
  Main,
  Sys,
  Weather,
  Wind,
  OpenWeatherFiveDayTemperature,
  FiveDayWeatherData,
  FiveDayMain,
  FiveDaySys,
  City,
} from '../_interface/weather.interface';

export const MOCK_MAIN: Main = {
  feels_like: 12,
  humidity: 13,
  pressure: 10,
  temp: 80,
  temp_max: 100,
  temp_min: -12,
};

export const MOCK_SYS: Sys = {
  country: 'US',
  id: 1232,
  sunrise: 1000000,
  sunset: 1000001,
  type: 1,
};

export const MOCK_WEATHER: Weather = {
  description: 'clear sky',
  icon: '01d',
  id: 800,
  main: 'Clear',
};

export const MOCK_WIND: Wind = {
  speed: 1.23,
  deg: 123,
};

export const MOCK_CURRENT_TEMPERATURE: OpenWeatherCurrentTemperature = {
  base: 'base',
  clouds: { all: 1 },
  cod: 1,
  coord: { lat: 1, lon: 2 },
  dt: 123,
  id: 1,
  main: MOCK_MAIN,
  name: 'City',
  sys: MOCK_SYS,
  timezone: -14400,
  visibility: 10000,
  weather: [MOCK_WEATHER],
  wind: MOCK_WIND,
};

export const MOCK_CITY: City = {
  coord: { lat: 1, lon: 2 },
  country: 'US',
  id: 100,
  name: 'City',
  population: 10000,
  sunrise: 12312,
  sunset: 1231231,
  timezone: -14400,
};

export const MOCK_FIVE_DAY_MAIN: FiveDayMain = {
  feels_like: MOCK_MAIN.feels_like,
  humidity: MOCK_MAIN.humidity,
  pressure: MOCK_MAIN.pressure,
  temp: MOCK_MAIN.temp,
  temp_max: MOCK_MAIN.temp_max,
  temp_min: MOCK_MAIN.temp_min,
  temp_kf: 123,
  grnd_level: 100,
  sea_level: 20,
};

export const MOCK_FIVE_DAY_SYS: FiveDaySys = {
  pod: 'pod',
};

export const MOCK_FIVE_DAY_WEATHER_DATA: FiveDayWeatherData = {
  clouds: { all: 1 },
  dt: 123,
  dt_txt: '12/12/2019',
  main: MOCK_FIVE_DAY_MAIN,
  pop: 1000,
  sys: MOCK_FIVE_DAY_SYS,
  visibility: 123,
  weather: [MOCK_WEATHER],
  wind: MOCK_WIND,
};

export const MOCK_FIVE_DAY_TEMPERATURE: OpenWeatherFiveDayTemperature = {
  city: MOCK_CITY,
  cnt: 123,
  cod: 'cod',
  list: [MOCK_FIVE_DAY_WEATHER_DATA, MOCK_FIVE_DAY_WEATHER_DATA],
};
