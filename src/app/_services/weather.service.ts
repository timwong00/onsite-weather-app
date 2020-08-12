import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY: string = '2bb2ca5bc403f67c3dc41cb004775c43';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  getCurrentTemperature(latitude: number, longitude: number): any {
    return this._http.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
    );
  }

  getFiveDayTemperature(latitude: number, longitude: number): any {
    return this._http.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
    );
  }
}
