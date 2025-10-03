import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/service/auth.service';
import { SignUpService } from '../../service/sign-up.service';
import { responseCode } from '../../../sharedModule/constants/responseCode';
import { AlertService } from '../../../sharedModule/services/alert.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userDetailsForm: FormGroup = new FormGroup({});
  showPassword = false;

  constructor(
    private readonly fb: FormBuilder,
    private auth: AuthService,
    private readonly signUpService: SignUpService,
    private readonly alertService: AlertService
  ) { }
  get f() { return this.userDetailsForm.controls; }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
    this.userDetailsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      city: [''],
      state: [''],
      zipCode: [''],
      role: ['', Validators.required]
    });
  }

  saveUserDetails() {
    if (this.userDetailsForm.invalid) {
      this.userDetailsForm.markAllAsTouched();
      return;
    }
    if (this.userDetailsForm.valid) {
      this.signUpService.saveUserDetails(this.userDetailsForm.value).subscribe({
        next: (response: any) => {
          if (response?.code === responseCode[200]) {
            this.alertService.showAlert('success', 'Sign in successfully!');
          }
        },
        error: (error: { status: number; error: any; }) => {
          if (error.status === 400) {
            console.error("Bad Request Details:", error.error);
            this.alertService.showAlert('danger', 'Sign in failed!');
          }
        }
      });
    }
  }

}
