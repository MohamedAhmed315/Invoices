import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveTabService } from '../shared/active-tab.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit ,OnDestroy{
  activeTab: string='';
  activeIcon: string = '../../assets/img/team.svg';
  page_number: number = 1;
  itemPerPage: number = 10;
  collection: object[] = [{role:'adminstrator', name: 'mohamed', email: 'abc@email.com'}, {role: 'user', name:'mostafa', email: 'mostafa@email.com'}];

  activeTitleSubscribtion: Subscription = new Subscription;
  constructor(private route:ActivatedRoute ,  private activeTabService:ActiveTabService) { }

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
