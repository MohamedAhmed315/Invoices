import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'app-currency-summary',
  templateUrl: './currency-summary.component.html',
  styleUrls: ['./currency-summary.component.scss']
})
export class CurrencySummaryComponent implements OnInit {

  data_results: any;
  currency_obj: { [key: string]: number } = { EGP: 0, EUR: 0, GBP: 0, USD: 0 };
  API_KEY = 'klCq8zwoNb5JQpORARgTsGX27sm9n9yj';
  myHeaders = new Headers();
  requestOptions = {};

  constructor() { }

  public getCurrency() {
    this.myHeaders.append('apikey', this.API_KEY);
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: this.myHeaders
    };

    // USD
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=EGP&from=USD&amount=1", this.requestOptions)
      .then(response => response.text())
      .then(result => {
        this.currency_obj['USD'] = JSON.parse(result)['result'];
      })
      .catch(error => console.log('error', error));

    // EUR
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=EGP&from=EUR&amount=1", this.requestOptions)
      .then(response => response.text())
      .then(result => {
        this.currency_obj['EUR'] = JSON.parse(result)['result'];
      })
      .catch(error => console.log('error', error));

    // GBP
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=EGP&from=GBP&amount=1", this.requestOptions)
      .then(response => response.text())
      .then(result => {
        this.currency_obj['GBP'] = JSON.parse(result)['result'];
      })
      .catch(error => console.log('error', error));
  }

  ngOnInit(): void {
    this.getCurrency();
  }
}
