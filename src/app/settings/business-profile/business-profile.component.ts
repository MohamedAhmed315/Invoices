import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss']
})
export class BusinessProfileComponent implements OnInit {
  type_value = 'Adminstrator';
  constructor() { }

  change_type_value(el: HTMLElement) {
    this.type_value = el.innerHTML;
  }
  
  ngOnInit(): void {
  }

}
