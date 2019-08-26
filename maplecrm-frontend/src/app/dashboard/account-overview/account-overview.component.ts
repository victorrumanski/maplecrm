import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss']
})
export class AccountOverviewComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Done', 'To Be Done'];
  public doughnutChartData: MultiDataSet = [
    [40, 60]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors = [{
    backgroundColor: [
      'rgba(9, 180, 23, 0.794)',
      'rgba(222, 33, 99, 0.9)',
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
      enabled:false
    }
  }

  constructor() {

  }

  ngOnInit() {
    this.options.legend.display = false;
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
