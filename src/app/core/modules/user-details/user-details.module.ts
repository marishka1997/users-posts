import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class UserDetailsModule {}
