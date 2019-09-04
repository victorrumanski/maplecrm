import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  template: `
    <img src="/assets/images/logo.png" alt="Logo" height="50px">
    <h1>MapleCRM</h1>
    <h2>403 - You are not authorized to see this page.</h2>
  `
})
export class ForbiddenComponent implements OnInit {
  
  ngOnInit() {

  }
}