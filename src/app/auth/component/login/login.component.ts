import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NgbModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: any;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        const role = res.role;
        this.authService.loadRoutesForRole(role);
        if (role === 'dealer') this.router.navigate(['/dealer']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit() {
    const role = this.authService.getRole();
    if (role) {
      // Already logged in, navigate directly
      if (role === 'admin') this.authService.loadRoutesForRole('admin');
      else if (role === 'dealer') this.authService.loadRoutesForRole('dealer');
      else if (role === 'customer') this.authService.loadRoutesForRole('customer');
    }
  }


}
