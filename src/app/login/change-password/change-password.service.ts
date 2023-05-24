import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HandleApiCallsService } from 'src/app/shared/handle-api-calls.service';
import { UserChangePassword } from './change-password.model';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private apiCalling:HandleApiCallsService , 
              private router:Router) { }

  ChangePasswordService(UserChangePassword:UserChangePassword){
    this.apiCalling.fetchUserChangePassword(UserChangePassword)
      .subscribe(responseData => {
        this.apiCalling.sucessCalling(
          "Your Password is change sucessfully",
          true
          );
          setTimeout(() => {this.router.navigate(['admin'])},1200)
      }, errorMessage =>{
        this.apiCalling.errorCalling(
          "Your Password not changed yet try again",
          false
          )
      })
  }
}
