import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ActiveTabService } from 'src/app/shared/active-tab.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.scss']
})
export class PreviewInvoiceComponent implements OnInit {

  activeTab: string = '';
  activeIcon: string = '../../assets/img/invoice.svg';
  activeTitleSubscribtion: Subscription = new Subscription;
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
