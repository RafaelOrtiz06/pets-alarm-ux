import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-get-alarms',
  templateUrl: './get-alarms.component.html',
  styleUrls: ['./get-alarms.component.scss'],
})
export class GetAlarmsComponent implements OnDestroy {
  get isCreated(): boolean {
    return localStorage.getItem('create') == 'true';
  }

  ngOnDestroy() {
    localStorage.clear();
  }
}
