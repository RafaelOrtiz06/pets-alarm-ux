import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthStore } from '@auth/auth.store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserGuard {
  isLoggedIn: boolean = false;

  constructor(private authStore: AuthStore) {}
  canActivate(): boolean {
    this.authStore.isLoggedIn$.subscribe({
      next: (loggedState) => this.isLoggedIn = loggedState
    })
    
    return this.isLoggedIn;
  }
  
}
