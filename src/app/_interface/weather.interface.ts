export interface OpenWeatherCurrentTemperature {
  base: string;
  clouds: Cloud;
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

export interface OpenWeatherFiveDayTemperature {
  city: City;
  cnt: number;
  cod: string;
  list: Array<FiveDayWeatherData>;
}

export interface City {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface FiveDayWeatherData {
  clouds: Cloud;
  dt: number;
  dt_txt: string;
  main: FiveDayMain;
  pop: number;
  sys: FiveDaySys;
  visibility: number;
  weather: Array<Weather>;
  wind: Wind;
}

export interface Cloud {
  all: number;
}

export interface FiveDayMain extends Main {
  grnd_level: number;
  sea_level: number;
  temp_kf: number;
}

export interface FiveDaySys {
  pod: string;
}
