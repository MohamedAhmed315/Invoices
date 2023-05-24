import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { UserLoginInfo } from '../user-login.model';
import { LoginResponseModel } from './login-response.model';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLoginInfo:UserLoginInfo;
  loginErrorMessage = new BehaviorSubject<string>("");
  loginSucessMessage = new BehaviorSubject<string>("");
  userLoginResponse = new BehaviorSubject<LoginResponseModel |null>(null);
  jwtHelper = new JwtHelperService();
  flagError = new Subject<boolean>();
  flagSucess = new Subject<boolean>();


  constructor(private authService:AuthenticationService,
              private router:Router,
              private activatedRoute: ActivatedRoute,) { 
  }

  userLogin(userLoginInfo:UserLoginInfo){
  //let userEmail=userLoginInfo.Email;
  this.authService.fetchLoginIn(userLoginInfo)
  .subscribe(responseData => {
      // console.log(responseData)
      const decodedUser = this.jwtHelper.decodeToken(responseData.Token);
      const expireTokenDate = new Date(responseData.Expiration)
      const userLoginResponses = new LoginResponseModel(responseData.Token,expireTokenDate);
      this.userLoginResponse.next(userLoginResponses);
      localStorage.setItem('userLogin', JSON.stringify(userLoginResponses))
      this.flagSucess.next(true);
      this.flagError.next(false);
      this.loginSucessMessage.next(decodedUser.sub);
      setTimeout(() => {this.router.navigate(['admin'])},1200)
    },
    errorMessage =>{
      console.log(errorMessage)
      this.flagError.next(true);
      this.flagSucess.next(false);
      this.loginErrorMessage.next(errorMessage);
    }
    )
  }

  userLogOut(){
    this.userLoginResponse.next(null);
    localStorage.removeItem('userLogin');
    this.router.navigate(['/'], { relativeTo: this.activatedRoute })
  }
  autoLoginIn(){
    const userLoginData=JSON.parse(localStorage.getItem('userLogin') || '{}');
    if(!userLoginData) return;
    console.log(userLoginData._tokenExpirationDate)
    const loadedUser = new LoginResponseModel(userLoginData._token,new Date(userLoginData._tokenExpirationDate));
    console.log(loadedUser)
    if(loadedUser.getToken()){
      this.userLoginResponse.next(loadedUser);
      this.router.navigate(['admin'])
    }  
    else{
      this.userLogOut();
    }
  }
}
