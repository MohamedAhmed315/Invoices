import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveTabService } from '../shared/active-tab.service';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit ,OnDestroy{

  is_open: boolean = false;
  activeTab: string='';
  activeIcon: string = '../../assets/img/chart-line-solid.svg';
  activeTitleSubscribtion: Subscription = new Subscription;


  constructor(private route:ActivatedRoute , 
             private activeTabService:ActiveTabService , 
             ) {

   this.activeTitleSubscribtion=this.route.data.subscribe(
      (data: Data) => {
         this.activeTab=data['activeTab'];
         this.activeTabService.activeTabs.next(
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

  ngOnInit(): void {
    // this.is_open = this.sidebar.is_open;
  
  }

}
