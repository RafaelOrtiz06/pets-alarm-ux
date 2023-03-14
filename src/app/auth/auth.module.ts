import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from '@auth/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthStore } from './auth.store';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ],
  providers: [AuthStore, AuthService]
})
export class AuthModule { }
