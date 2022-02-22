import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  bigCharts() {
    return [
      {
        name: 'abc',
        data: [500, 690, 800, 1200, 4300, 5000],
      },

      {
        name: 'def',
        data: [500, 690, 800, 1200, 4300, 2000],
      },
      {
        name: 'ghi',
        data: [300, 590, 230, 121, 300, 400],
      },
      {
        name: 'jkl',
        data: [10, 19, 30, 120, 430, 5001],
      },
    ];
  }
  Cards() {
    return [71, 80, 40, 66];
  }
  pieCharts() {
    return [
      {
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true,
          },
          {
            name: 'Internet Explorer',
            y: 11.84,
          },
          {
            name: 'Firefox',
            y: 10.85,
          },
          {
            name: 'Edge',
            y: 4.67,
          },
          {
            name: 'Safari',
            y: 4.18,
          },
          {
            name: 'Sogou Explorer',
            y: 1.64,
          },
          {
            name: 'Opera',
            y: 1.6,
          },
          {
            name: 'QQ',
            y: 1.2,
          },
          {
            name: 'Other',
            y: 2.61,
          },
        ],
      },
    ];
  }
}
