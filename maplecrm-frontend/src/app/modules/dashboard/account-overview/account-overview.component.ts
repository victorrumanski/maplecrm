import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Account } from '@app/_core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountOverviewComponent implements OnInit {
  @Input() public account: Account;

  public doughnutChartLabels: Label[] = ['Done', 'Goal'];
  public doughnutChartData: MultiDataSet = [[40, 60]];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {
  }

  ngOnInit() {
    this.options.legend.display = false;
  }

  public colors = [{
    backgroundColor: [
      'rgba(250, 20, 20, 0.8)',
      'rgba(200, 200, 200, 0.9)',
      'rgba(255, 206, 86, 0.9)',
      'rgba(75, 192, 192, 0.9)',
      'rgba(153, 102, 255, 0.9)',
      'rgba(255, 159, 64, 0.9)'
    ]
  }];

  public options: ChartOptions = {
    legend: {
      display: false
    },
    tooltips: {
      //enabled:false
    }
  }


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
