import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserDetailsService } from '../../services/user-details.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user!: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userDetails: UserDetailsService
  ) {}

  ngOnInit(): void {
    this.userDetails
      .getUserDetails(this.route.snapshot.params['id'])
      .subscribe((User) => (this.user = User));
  }

  displayUserPosts() {
    this.router.navigate(['posts'], { relativeTo: this.route });
  }
}
