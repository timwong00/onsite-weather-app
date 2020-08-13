import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

// Components
import { CurrentTemperatureComponent } from './current-temperature.component';

// Services
import { WeatherService } from 'src/app/_services/weather.service';

// Mocks
import { MOCK_CURRENT_TEMPERATURE } from '../../_mocks/weather.mocks';

describe('CurrentTemperatureComponent', () => {
  let component: CurrentTemperatureComponent;
  let fixture: ComponentFixture<CurrentTemperatureComponent>;

  let mockWeatherService: jasmine.SpyObj<WeatherService>;
  let geolocationSpy: jasmine.Spy;

  beforeEach(async((): void => {
    mockWeatherService = jasmine.createSpyObj('WeatherService', [
      'getCurrentTemperature',
    ]);

    geolocationSpy = spyOn(
      navigator.geolocation,
      'getCurrentPosition'
    ).and.callFake(function () {
      let position = { coords: { latitude: 32, longitude: -96 } };
      arguments[0](position);
    });

    mockWeatherService.getCurrentTemperature.and.returnValue(
      of(MOCK_CURRENT_TEMPERATURE)
    );

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CurrentTemperatureComponent],
      providers: [{ provide: WeatherService, useValue: mockWeatherService }],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(CurrentTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  it('should have currentTemperatureData', (): void => {
    expect(component.currentTemperatureData).toBeDefined();
  });

  it('should display "City Weather" in mat-card title', (): void => {
    const CARD_TITLE = document.getElementsByTagName('mat-card-title')[0]
      .textContent;
    expect(CARD_TITLE).toBe('City Weather');
  });

  it('should display temperature in mat-card content', (): void => {
    const CARD_CONTENT = document.getElementsByTagName('mat-card-content')[0]
      .textContent;
    expect(CARD_CONTENT).toContain('80');
  });

  it('should convert unix timestamp to a time in milliseconds', (): void => {
    expect(component.convertToTimezone(1597280619, -14400)).toEqual(
      1597280619 * 1000 - 14400
    );
  });
});
