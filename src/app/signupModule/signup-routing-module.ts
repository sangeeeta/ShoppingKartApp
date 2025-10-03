import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserDetailsComponent } from "./component/user-details/user-details.component";

export const USERDETAILS_ROUTES: Routes = [
 { path: '', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(USERDETAILS_ROUTES)],
  exports: [RouterModule]
})


export class UserDetailsRoutingModule { }
