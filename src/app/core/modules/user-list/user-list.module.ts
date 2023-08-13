import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListRoutingModule} from './user-list-routing.module';
import {UserListComponent} from "./user-list.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],

})
export class UserListModule {
}
