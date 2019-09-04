import { OnInit, Component } from '@angular/core';
@Component({
  selector: 'app-not-found',
  template: `
    <img src="/assets/images/logo.png" alt="Logo" height="50px">
    <h1>MapleCRM</h1>
    <h2>404 - The requested page was not found.</h2>
  `
})
export class NotFoundComponent implements OnInit {
  
  ngOnInit() {

  }
}