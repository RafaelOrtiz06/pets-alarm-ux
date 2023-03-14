import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@auth/auth.service';

import { AuthStore } from '@auth/auth.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  isLoggedIn$ = this.authStore.isLoggedIn$;

  constructor(private authStore: AuthStore, private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    
  }

  onSubmit() {
    const { email } = this.loginForm.value;
    const isValid = this.authService.validateLogin(this.loginForm.value);

    (isValid) ? this.authStore.login(email) : alert('Invalid Login');
  }

 
}
