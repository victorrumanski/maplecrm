import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/_core/services';

@Component({
  selector: 'app-oauth2-redirect',
  templateUrl: './oauth2-redirect.component.html'
  //styleUrls: ['./oauth2-redirect.component.scss']
})
export class OAuth2RedirectComponent implements OnInit {
  error: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthService
  ) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const { token, error } = params;
      if (error) {
        this.error = error;
      } else {
        //if there is no error, then oauth went ok
        this.authenticationService.processOAuth2LoginResult(token).subscribe(user => {
          this.router.navigate(['/'])
        }, error => {
          console.log('error on processOAuth2LoginResult', error)
        });
      }
    });
  }

}