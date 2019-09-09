import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from '@app/_core/models';
import { filter, map, mergeMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() public user: User;
  @Input() public mainTitle: string;

  @Output() logout = new EventEmitter();

  private showAlerts: boolean = false;
  private showMessages: boolean = false;
  private showProfile: boolean = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
        , map(() => this.activatedRoute)
        , map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })
        , mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        const title = event['title'];
        this.titleService.setTitle(title);
        this.mainTitle = title;
      });
  }

  logoutClicked() {
    this.logout.emit(null);
  }

}