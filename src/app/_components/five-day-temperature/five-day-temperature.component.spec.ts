import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

// Components
import { FiveDayTemperatureComponent } from './five-day-temperature.component';

// Services
import { WeatherService } from 'src/app/_services/weather.service';

// Mocks
import { MOCK_FIVE_DAY_TEMPERATURE } from 'src/app/_mocks/weather.mocks';

describe('FiveDayTemperatureComponent', () => {
  let component: FiveDayTemperatureComponent;
  let fixture: ComponentFixture<FiveDayTemperatureComponent>;

  let mockWeatherService: jasmine.SpyObj<WeatherService>;
  let geolocationSpy: jasmine.Spy;

  beforeEach(async((): void => {
    mockWeatherService = jasmine.createSpyObj('WeatherService', [
      'getFiveDayTemperature',
    ]);

    geolocationSpy = spyOn(
      navigator.geolocation,
      'getCurrentPosition'
    ).and.callFake(function () {
      let position = { coords: { latitude: 32, longitude: -96 } };
      arguments[0](position);
    });

    mockWeatherService.getFiveDayTemperature.and.returnValue(
      of(MOCK_FIVE_DAY_TEMPERATURE)
    );

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FiveDayTemperatureComponent],
      providers: [{ provide: WeatherService, useValue: mockWeatherService }],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FiveDayTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 2 weather datas', (): void => {
    expect(component.weatherList.length).toBe(2);
  });

  it('should get Date from a date text string', (): void => {
    expect(component.getDate('2020-08-13 03:00:00')).toEqual(
      new Date('2020-08-13 03:00:00')
    );
  });
});
