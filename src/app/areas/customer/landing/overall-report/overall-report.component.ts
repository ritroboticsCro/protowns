import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-report',
  templateUrl: './overall-report.component.html',
  styleUrls: ['./overall-report.component.scss']
})
export class OverallReportComponent implements OnInit {
  
  public doughnutChartType = 'doughnut';
  public doughnutChartData = [65, 59, 30, 61];
  public doughnutChartLabel = [
    'Red',
    'Yellow',
    'Blue'
];

  constructor() { }

  ngOnInit() {
  }

}
