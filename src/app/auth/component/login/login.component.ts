import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: any;
  submitted = false;
  Subscriber: Subscription[] = [];

  constructor(
    private readonly fb: FormBuilder, 
    private readonly authService: AuthService, 
    private readonly router: Router
  ) {
    this.loginForm = this.fb.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    this.Subscriber.push(this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        const role = res.role;
        this.navigateByRole(role);
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    }));
  }

  ngOnInit() {
    const role = this.authService.getRole();
    if (role) {
      this.authService.loadRoutesForRole(role);
      this.navigateByRole(role);
    }
  }

  private navigateByRole(role: string) {
    switch (role) {
      case 'admin':
        this.router.navigate(['/admin/dashboard']);
        break;
      case 'dealer':
        this.router.navigate(['/dealer/dashboard']);
        break;
      case 'customer':
        this.router.navigate(['/customer/dashboard']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }

  ngOnDestroy() {
    this.Subscriber.forEach(sub => sub.unsubscribe());
  }


}
