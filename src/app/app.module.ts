import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

// Components
import { AppComponent } from './app.component';
import { CurrentTemperatureComponent } from './_components/current-temperature/current-temperature.component';
import { NavBarComponent } from './_components/nav-bar/nav-bar.component';
import { FiveDayTemperatureComponent } from './_components/five-day-temperature/five-day-temperature.component';

// Services
import { WeatherService } from './_services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTemperatureComponent,
    NavBarComponent,
    FiveDayTemperatureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
