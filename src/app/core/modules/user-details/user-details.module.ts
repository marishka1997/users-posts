import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailsRoutingModule} from './user-details-routing.module';
import {UserDetailsComponent} from "./user-details.component";

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
  ]
})
export class UserDetailsModule {
}
