import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, from, Observable, of, throwError } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  tap,
  finalize,
  filter,
  delay,
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

// Services
import { Store } from './../store/store';
import { StorageService } from './../services/storage.service';
import { MOCK_JWTOKEN } from './mock-token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  tokenStorageKey = 'ccdToken';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: StorageService,
    private store: Store
  ) {}

  init(): Observable<any> {
    return this.storage.getItem<string>(this.tokenStorageKey).pipe(
      filter((token) => !!token),
      tap((token: string) => this.userToStore(token))
    );
  }

  login(credentials: { email: string; password: string }): Observable<boolean> {
    return this.fakeApiLogin(credentials).pipe(
      switchMap((token: string) => {
        return this.storage.setItem(this.tokenStorageKey, token);
      }),
      tap((token: string) => this.userToStore(token)),
      map((token) => !!token)
    );
  }

  logout(): Observable<any> {
    return this.storage.clearAll().pipe(
      tap(() => this.router.navigateByUrl('/login')),
      catchError(() => this.router.navigateByUrl('/login'))
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.storage
      .getItem<string>(this.tokenStorageKey)
      .pipe(map((token) => (!!token ? true : false)));
  }

  private userToStore(token: string): void {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    this.store.set('user', decodedToken);
  }

  private fakeApiLogin(credentials: { email: string; password: string }) {
    // Fake Login
    return of(1).pipe(
      map(() => {
        if (
          credentials.email === 'info@yampi.co' &&
          credentials.password === '12345678'
        ) {
          return MOCK_JWTOKEN;
        }

        return null;
      }),
      delay(500)
    );
  }
}
