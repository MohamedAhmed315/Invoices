import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveTabService } from '../shared/active-tab.service';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent implements OnInit, OnDestroy {
  activeTab: string = '';
  activeIcon: string = '../../assets/img/bell.svg';
  activeTitleSubscribtion: Subscription = new Subscription;
  date_value: string = 'Sort By';
  page_number: number = 1;
  itemPerPage: number = 10;
  logs: object[] = [
    {
      date: '8 Dec, 2022 1:17 PM', action: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, deserunt.'
    },
    {
      date: '30 Jan, 2023 11:30 AM', action: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit molestias voluptatem!'
    }];

  constructor(private route: ActivatedRoute, private activeTabService: ActiveTabService) { }

  change_date_value(el: HTMLElement) {
    this.date_value = el.innerHTML;
  }

  ngOnInit(): void {
    this.activeTitleSubscribtion = this.route.data.subscribe(
      (data: Data) => {
        this.activeTab = data['activeTab'];
        this.activeTabService.activeTabs.next
          (
            {
              activeTab: this.activeTab,
              activeIcon: this.activeIcon
            }
          )
      }
    );
  }
  
  ngOnDestroy(): void {
    this.activeTitleSubscribtion.unsubscribe();
  }

}
