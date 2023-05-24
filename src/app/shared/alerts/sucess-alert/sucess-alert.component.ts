import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-sucess-alert',
  templateUrl: './sucess-alert.component.html',
  styleUrls: ['./sucess-alert.component.scss']
})
export class SucessAlertComponent implements OnInit ,OnChanges{
  SucessMessage: string;

  constructor(private loginService:LoginService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.loginService.loginSucessMessage
    .subscribe((SucessMessage)=>{this.SucessMessage=SucessMessage; console.log(SucessMessage) })
    }
    
    
  }


