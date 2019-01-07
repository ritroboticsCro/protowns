import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  public barChartLabels = ['Matko Piska', 'Matej Gadjo', 'Boris Thomas', 'Lee Sani'];
  public barChartType = 'horizontalBar';
  public barChartLegend = false;

  public barChartData = [
    {data: [2, 5, 2.5, 1.5, 2], label: 'Rounds Completed'}
  ];

  public barChartColors: any [] = [
    {
        backgroundColor: 'hsla(0,0%,100%,.8)',
        dataColor: 'hsla(0,0%,100%,.8)'
    }
];

public barChartOptions: any = {
  scales: {
    xAxes: [{
      gridLines: {
            display: true,
            borderDash: [8, 4],
          },
      ticks: {
        // beginAtZero: true,
        fontColor: 'hsla(0,0%,100%,.7)',
    }
    }],
    yAxes: [{
      gridLines: {
        display: false,
        borderDash: [8, 4],
      },
  ticks: {
    // beginAtZero: true,
    fontColor: 'hsla(0,0%,100%,.7)',
  }
    }]
  }
};

  constructor() { }

  ngOnInit() {
  }

}
