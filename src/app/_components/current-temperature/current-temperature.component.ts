import { Component, OnInit } from '@angular/core';
import { Subject, of, Observable } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';

// Services
import { WeatherService } from 'src/app/_services/weather.service';

// Interfaces
import { OpenWeatherCurrentTemperature } from '../../_interface/weather.interface';

@Component({
  selector: 'current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.css'],
})
export class CurrentTemperatureComponent implements OnInit {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private _weatherService: WeatherService) {}

  currentTemperatureData: any;
  weatherIcon: string;
  weatherDescription: string;

  ngOnInit(): void {
    this.getCurrentTemperature();
  }

  ngOnDestroy(): void {
    this._destroy$.next(false);
    this._destroy$.unsubscribe();
  }

  public getCurrentTemperature(): void {
    navigator.geolocation.getCurrentPosition((position: Position): void => {
      const LATITUDE: number = position.coords.latitude;
      const LONGITUDE: number = position.coords.longitude;
      this._weatherService
        .getCurrentTemperature(LATITUDE, LONGITUDE)
        .pipe(
          catchError((): Observable<Array<any>> => of([])),
          takeUntil(this._destroy$)
        )
        .subscribe(
          (res: OpenWeatherCurrentTemperature): void => {
            this.currentTemperatureData = res;
            this.weatherIcon = res.weather[0].icon;
            this.weatherDescription = res.weather[0].description;
          },
          (err) => console.log('HTTP Error', err)
        );
    });
  }

  public convertToTimezone(
    unixTimestamp: number,
    timezoneOffset: number
  ): number {
    // add timezone difference and convert to milliseconds
    return unixTimestamp * 1000 + timezoneOffset;
  }
}
