import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-alarms',
  templateUrl: './get-alarms.component.html',
  styleUrls: ['./get-alarms.component.scss'],
})
export class GetAlarmsComponent implements OnDestroy {
  get isCreated(): boolean {
    return localStorage.getItem('create') == 'true';
  }

  constructor(private router: Router) {}

  ngOnDestroy() {
    localStorage.clear();
  }

  createAlarm() {
    this.router.navigate(['/alarms/create']);
  }

  return() {
    this.router.navigate(['']);
  }
}
