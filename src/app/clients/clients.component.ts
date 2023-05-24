import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActiveTabService } from '../shared/active-tab.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {
  activeTab: string = '';
  activeIcon: string = '../../assets/img/clients.svg';
  activeTitleSubscribtion: Subscription = new Subscription;
  page_number: number = 1;
  itemPerPage: number = 10;
  clients: object[] = [{ type: 'individual', name: 'mohamed', address: 'address address address', email: 'abc@email.com' }, { type: 'organization', name: 'fifa', address: 'cairo', email: 'fifa@email.com' }];
  constructor(private route: ActivatedRoute, private activeTabService: ActiveTabService) { }

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
