import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveTabService {
  //For emitting active tab title
  activeTabs = new Subject<{activeTab:string,activeIcon:string}>();

  
  constructor() { }
}
