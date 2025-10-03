import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserDetailsRoutingModule } from './signup-routing-module';



@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserDetailsRoutingModule
  ]
})
export class SignUpModule { }
