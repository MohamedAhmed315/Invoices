import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss']
})
export class ErrorAlertComponent implements OnInit {
  errorMessage: string;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    // Listen on Error Message From Login
    this.loginService.loginErrorMessage
      .subscribe((errorMessage)=>{this.errorMessage=errorMessage;console.log(errorMessage)})
  }

}
