import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-expenses-summary',
  templateUrl: './expenses-summary.component.html',
  styleUrls: ['./expenses-summary.component.scss']
})
export class ExpensesSummaryComponent implements OnInit {
  filter_value: string = 'Sort By';
  currency_value: string = 'Currency';
  // Chart
  chart_data = [
    ['Jan', 94, 80],
    ['Feb', 4, 200],
    ['Mar', 18, 160],
    ['Apr', 400, 90],
    ['May', 30, 42],
    ['Jun', 30, 0],
    ['Jul', 100, 100],
    ['Aug', 13, 57],
    ['Sep', 180, 10],
    ['Oct', 70, 60],
    ['Nov', 240, 270],
    ['Dec', 290, 23],
  ];

  chart_type: ChartType = ChartType.LineChart;
  options = {
    colors: ['#1CDE9B', '#ff2f00'],
    backgroundColor: '#f1f8e9',
    pointSize: 5,
    crosshair: {
      color: '#000000',
      trigger: 'selection'
    }
  };

  constructor() { }

  change_filter_value(el: HTMLElement) {
    this.filter_value = el.innerHTML;
  }

  change_currency_value(el: HTMLElement) {
    this.currency_value = el.innerHTML;
  }

  ngOnInit(): void {
  }

}
