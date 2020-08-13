import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

// Services
import { WeatherService } from 'src/app/_services/weather.service';

// Interfaces
import {
  OpenWeatherFiveDayTemperature,
  FiveDayWeatherData,
} from 'src/app/_interface/weather.interface';

@Component({
  selector: 'app-five-day-temperature',
  templateUrl: './five-day-temperature.component.html',
  styleUrls: ['./five-day-temperature.component.css'],
})
export class FiveDayTemperatureComponent implements OnInit {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private _weatherService: WeatherService) {}

  fiveDayTemperatureData: OpenWeatherFiveDayTemperature;
  weatherList: Array<FiveDayWeatherData>;
  currentCityName: string;
  tableColumns: Array<string>;

  ngOnInit(): void {
    this._getFiveDayTemperature();
    this._getTableColumns();
  }

  ngOnDestroy(): void {
    this._destroy$.next(false);
    this._destroy$.unsubscribe();
  }

  private _getFiveDayTemperature(): void {
    navigator.geolocation.getCurrentPosition((position: Position): void => {
      const LATITUDE: number = position.coords.latitude;
      const LONGITUDE: number = position.coords.longitude;
      this._weatherService
        .getFiveDayTemperature(LATITUDE, LONGITUDE)
        .pipe(
          catchError((): Observable<Array<any>> => of([])),
          takeUntil(this._destroy$)
        )
        .subscribe(
          (res: OpenWeatherFiveDayTemperature): void => {
            this.fiveDayTemperatureData = res;
            this.weatherList = res.list;
            this.currentCityName = res.city.name;
          },
          (err) => console.log('HTTP Error', err)
        );
    });
  }

  private _getTableColumns(): void {
    this.tableColumns = ['datetime', 'temp', 'icon', 'condition'];
  }

  public getDate(dateText: string): Date {
    return new Date(dateText);
  }
}
