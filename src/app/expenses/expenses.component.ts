import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveTabService } from '../shared/active-tab.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit ,OnDestroy{
  activeTab: string='';
  activeIcon: string = '../../assets/img/expenses.svg';
  date_value: string = 'Sort By';
  type_value: string = 'Type';
  page_number: number = 1;
  itemPerPage: number = 10;
  expenses: object[] = [{date: 'Dec 01, 2022 11:44 AM', client: 'client name', type: 'upgrade', desc: "abc 123", currency: 'EGP', total: 123456}];
  activeTitleSubscribtion: Subscription = new Subscription;

  constructor(private route:ActivatedRoute ,  private activeTabService:ActiveTabService) { }

  change_date_value(el: HTMLElement) {
    this.date_value = el.innerHTML;
  }

  change_type_value(el: HTMLElement) {
    this.type_value = el.innerHTML;
  }


  ngOnInit(): void {
   this.activeTitleSubscribtion = this.route.data.subscribe(
      (data: Data) => {
         this.activeTab=data['activeTab'];
         this.activeTabService.activeTabs.next
         (
          {
            activeTab:this.activeTab,
            activeIcon:this.activeIcon
          }
          )
      }
    );
  }

  ngOnDestroy(): void {
    this.activeTitleSubscribtion.unsubscribe();
  }

}
