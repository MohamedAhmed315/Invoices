import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-invoices-summary',
  templateUrl: './invoices-summary.component.html',
  styleUrls: ['./invoices-summary.component.scss']
})
export class InvoicesSummaryComponent implements OnInit {
  filter_value: string = 'Sort By';
  currency_value: string = 'Currency';
  // Chart 1
  chart_data1 = [
    ['Due', 71],
    ['Overdue', 29],
  ];

  chart_type1: ChartType = ChartType.PieChart;
  options1 = {
    pieHole: 0.8,
    colors: ['#ffd700', '#ff2f00'],
  };

  // Chart 2
  chart_data2 = [
    ['Total', 94],
    ['Due', 4],
    ['Overdue', 2],
  ];

  chart_type2: ChartType = ChartType.PieChart;
  options2 = {
    pieHole: 0.8,
    colors: ['#1CDE9B', '#ffd700', '#ff2f00'],
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
