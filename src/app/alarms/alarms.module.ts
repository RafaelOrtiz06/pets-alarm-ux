import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { AlarmsRoutingModule } from './alarms-routing.module';

import { GetAlarmsComponent } from './get-alarms/get-alarms.component';
import { CreateAlarmComponent } from './create-alarm/create-alarm.component';

@NgModule({
  declarations: [ GetAlarmsComponent, CreateAlarmComponent ],
  imports: [
    CommonModule,
    IonicModule,
    AlarmsRoutingModule
  ]
})
export class AlarmsModule { }
