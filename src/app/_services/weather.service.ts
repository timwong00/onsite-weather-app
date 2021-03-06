import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONFIG } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  getCurrentTemperature(latitude: number, longitude: number): any {
    return this._http.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${CONFIG.API_KEY}&units=imperial`
    );
  }

  getFiveDayTemperature(latitude: number, longitude: number): any {
    return this._http.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${CONFIG.API_KEY}&units=imperial`
    );
  }
}
