import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {
  language_value = 'English';
  currency_value = 'EGP';
  year_value = 'EGP';

  constructor() { }

  change_language_value(el: HTMLElement) {
    this.language_value = el.innerHTML;
  }

  change_currency_value(el: HTMLElement) {
    this.currency_value = el.innerHTML;
  }

  change_year_value(el: HTMLElement) {
    this.year_value = el.innerHTML;
  }

  ngOnInit(): void {
  }

}
