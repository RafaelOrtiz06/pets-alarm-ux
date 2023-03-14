import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { authCredentials } from './auth.credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  validateLogin(credentials: { email: string, password: string }) {
    let isCorrectLogin: boolean = false;
    const { email, password } = credentials;
    
    this.getAuthCredentials().subscribe({
      next: (auth) => {
        if(auth.email == email && auth.password == password) {
          isCorrectLogin = true;
        }
      }
    })

    return isCorrectLogin;
  }

  getAuthCredentials(): Observable<any> {
    return of(authCredentials);
  }
}
