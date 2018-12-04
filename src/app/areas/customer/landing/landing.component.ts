import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 30, 61, 56, 55, 40, 28, 48, 40, 19, 76], label: 'Series A'},
    // {data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
