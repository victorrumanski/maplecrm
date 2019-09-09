import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@app/_core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  public user: User;

  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authenticationService.currentUserValue;
    this.authenticationService.currentUser$
      .subscribe(user => {
        if (!user) {
          this.router.navigate(['/auth/login'])
        }
      })
  }

  doLogout() {
    this.authenticationService.logout();
  }

}
