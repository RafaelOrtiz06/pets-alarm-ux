import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

interface AuthState {
    loggedIn: boolean;
}

const initialState: AuthState = {
    loggedIn: false
}

@Injectable()
export class AuthStore extends ComponentStore<AuthState> {
    isLoggedIn$: Observable<boolean> = this.select(state => state.loggedIn);

    constructor() {
        super(initialState);
    }

    login(email: string) {
        this.setState(state => {
            return {
                ...state,
                loggedIn: true
            }
        })
    }

    logout(email: string) {
        this.setState(state => {
            return {
                ...state,
                loggedIn: false
            }
        })
    }
}