import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-alarm',
  templateUrl: './create-alarm.component.html',
  styleUrls: ['./create-alarm.component.scss'],
})
export class CreateAlarmComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  createAlarm() {
    localStorage.setItem('create', 'true');

    this.router.navigate(['/alarms']);
  }

  return() {
    this.router.navigate(['/alarms']);
  }

}
