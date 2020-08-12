export interface OpenWeatherCurrentTemperature {
  base: string;
  clouds: object;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Array<Weather>;
  wind: Wind;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Wind {
  speed: number;
  deg: number;
}
