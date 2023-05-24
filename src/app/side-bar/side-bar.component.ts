import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  closeAsideStatus:boolean= true;
  currentLang:any
  @ViewChild('drawer ', { read: ElementRef }) drawer :ElementRef;
 
  constructor(private route:ActivatedRoute , private renderer:Renderer2) {
    
   }

  ngOnInit(): void {
 
  }
  closeAsideBar(){
    this.closeAsideStatus=false;
    this.currentLang=localStorage.getItem('langi18n');
    if(this.currentLang=='ar'){
      this.checkDirection('right',100,'left','auto');
    }
    else{
      this.checkDirection('left',100,'right','auto');
    }
  }
  toggle(){
    this.renderer.setStyle(this.drawer.nativeElement,'width','200px');
    this.closeAsideStatus=true;
    this.currentLang=localStorage.getItem('langi18n');
    if(this.currentLang=='ar'){
      this.checkDirection('right',200,'left','auto');
    }
    else{
      this.checkDirection('left',200,'right','auto');
    }

  }
  //Change margin Draer Content dynamically accoroding to language
  checkDirection(direction:string ,directionVlaue:number,oppDirection:string,oppDirectionValue:string){
    this.renderer.setStyle(this.drawer.nativeElement.parentElement.children[4],`margin-${oppDirection}`,oppDirectionValue)
    this.renderer.setStyle(this.drawer.nativeElement.parentElement.children[4],`margin-${direction}`,`${directionVlaue}px`)
  }


}
