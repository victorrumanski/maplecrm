import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  template: `
    <ng2-slim-loading-bar color="blue"></ng2-slim-loading-bar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(
    private _loadingBar: SlimLoadingBarService,
    private _router: Router
  ) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
}
