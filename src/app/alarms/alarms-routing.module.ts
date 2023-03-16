import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlarmComponent } from './create-alarm/create-alarm.component';
import { GetAlarmsComponent } from './get-alarms/get-alarms.component';

const routes: Routes = [
  { path: '', component: GetAlarmsComponent },
  { path: '', component: CreateAlarmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlarmsRoutingModule { }
