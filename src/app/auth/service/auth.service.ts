import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { apiUrls } from '../../sharedModule/constants/apiUrl';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl = environment.API_URL;
  private loggedInSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor(private readonly http: HttpClient, private readonly router: Router) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${apiUrls.login}`, credentials).pipe(
      tap((res: any) => {
        if (res && res.token && res.role) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
          this.loggedInSubject.next(true);
        }

      })
    );
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // true only if token exists
  }

  logout() {
    localStorage.clear();
    this.loggedInSubject.next(false);
    this.router.navigate(['/auth/login']);
  }

  loadRoutesForRole(role: string) {
    let roleRoutes: Array<any> = [];

    if (!roleRoutes || roleRoutes.length === 0) return; // safety check
    this.router.resetConfig([
      ...this.router.config.filter(r => r.path !== '' && r.path !== '**'),
      ...roleRoutes,
      { path: '**', redirectTo: '/login' }
    ]);
  }

}
