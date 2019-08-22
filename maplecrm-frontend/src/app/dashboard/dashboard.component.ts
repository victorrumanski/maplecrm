import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';
import { User } from '@app/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;
  
  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.user = this.authenticationService.currentUserValue;
    this.authenticationService.currentUser.subscribe(user => {
      if (!user) {
        router.navigate(['/auth/login'])
      }
    })
  }

  ngOnInit() {

  }


}
