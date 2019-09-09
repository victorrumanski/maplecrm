import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Order } from '@app/_core';

@Component({
  selector: 'app-last-orders',
  templateUrl: './last-orders.component.html',
  styleUrls: ['./last-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastOrdersComponent implements OnInit {

  @Input() public orders: Order[];
  
  constructor() { }

  ngOnInit() {
  }

}
