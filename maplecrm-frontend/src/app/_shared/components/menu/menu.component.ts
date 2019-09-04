import { OnInit, Component, Input } from '@angular/core';
import { User } from '@app/_core/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() public user: User;

  ngOnInit() {

  }

}