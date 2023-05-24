import { Component, OnInit } from '@angular/core';
import { Data } from 'popper.js';
import { ActiveTabService } from 'src/app/shared/active-tab.service';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent implements OnInit {
  activeTitle: string='';
  activeCompenantDetail={
    activeTitle:'',
    activeIcon:''
  }

  constructor(private activeTabService:ActiveTabService) {
    //Return active title from Active Tab service
    this.activeTabService.activeTabs.subscribe(
      (data:{activeTab:string,activeIcon:string}) =>{
        this.activeCompenantDetail={
          activeTitle:data.activeTab,
          activeIcon:data.activeIcon
        }
      }
      );
   }

  ngOnInit(): void {}

}
