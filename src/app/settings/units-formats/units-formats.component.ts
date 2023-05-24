import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-units-formats',
  templateUrl: './units-formats.component.html',
  styleUrls: ['./units-formats.component.scss']
})
export class UnitsFormatsComponent implements OnInit {
  number_format_value = '100,000.00';
  decimal_places_value = '1.00';
  date_format_value = 'Jan 1, 2020';
  time_format_value = '12 hrs';
  constructor() { }

  change_number_format_value(el: HTMLElement) {
    this.number_format_value = el.innerHTML;
  }

  change_decimal_places_value(el: HTMLElement) {
    this.decimal_places_value = el.innerHTML;
  }

  change_date_format_value(el: HTMLElement) {
    this.date_format_value = el.innerHTML;
  }

  change_time_format_value(el: HTMLElement) {
    this.time_format_value = el.innerHTML;
  }

  ngOnInit(): void {
  }

}
