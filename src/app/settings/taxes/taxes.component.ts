import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent implements OnInit {

  taxes: object[] = [{ name: 'tax 1', rate: 0.12 }, { name: 'tax 2', rate: 0.14 }, { name: 'tax 3', rate: 0.98 }];
  page_number: number = 1;
  itemPerPage: number = 10;
  
  constructor() { }

  ngOnInit(): void {
  }

}
