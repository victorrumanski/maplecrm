import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from '@app/_core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public user: User;
  @Input() public thetitle: string;

  @Output() logout = new EventEmitter();

  private showAlerts: boolean = false;
  private showMessages: boolean = false;
  private showProfile: boolean = false;

  constructor() { }

  ngOnInit() { }

  logoutClicked(){
    this.logout.emit(null);
  }

}