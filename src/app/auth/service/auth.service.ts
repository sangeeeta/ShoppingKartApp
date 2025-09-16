import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ADMIN_ROUTES } from '../../admin/admin-routing.module';
import { DEALER_ROUTES } from '../../dealer/dealer-routing.module';
import { PRODUCTS_ROUTES } from '../../productsModule/products-routing.module';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private apiUrl = 'https://yourapi.com/api/auth';
  private loggedInSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: any): Observable<any> {
    //TODO: after integrating backend remove the mocked response
    // return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
    //   tap((res: any) => {
    //     //TODO after intigrating backend remove it
    //     res.token = 12345;
    //     res.role = 'admin';
    //     localStorage.setItem('token', res.token);
    //     localStorage.setItem('role', res.role);
    //   })
    // );

    // Mocked login response using RxJS 'of'
    return new Observable<any>((observer) => {
      const res = { token: '12345', role: 'dealer' };
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.role);
      this.loggedInSubject.next(true);
      observer.next(res);
      observer.complete();
    });
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

    if (role === 'admin') roleRoutes = ADMIN_ROUTES;
    else if (role === 'dealer') roleRoutes = DEALER_ROUTES;
    else if (role === 'customer') roleRoutes = PRODUCTS_ROUTES;

    if (!roleRoutes || roleRoutes.length === 0) return; // safety check
    this.router.resetConfig([
      ...this.router.config.filter(r => r.path !== '' && r.path !== '**'),
      ...roleRoutes,
      { path: '**', redirectTo: '/login' }
    ]);
  }

}
