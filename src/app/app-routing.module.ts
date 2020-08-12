import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentTemperatureComponent } from './_components/current-temperature/current-temperature.component';
import { FiveDayTemperatureComponent } from './_components/five-day-temperature/five-day-temperature.component';

const routes: Routes = [
  { path: '', redirectTo: 'current', pathMatch: 'full' },
  { path: 'current', component: CurrentTemperatureComponent },
  { path: 'fiveday', component: FiveDayTemperatureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
