import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { UserLoginInfo } from './user-login.model';
import { AuthenticationService } from '../shared/authentication.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show_success_Alert: boolean = false;
  show_failure_alert: boolean = false;
  showLoading: boolean = false;
 
  UserLoginInfo:UserLoginInfo;

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private loginService:LoginService,) { }

  formSubmit() {
    if(this.LoginForm.valid){
      this.UserLoginInfo={
        "Email":this.LoginForm.get('email')?.value !,
        "Password": this.LoginForm.get('password')?.value !,
        "RememberMe": true  
       }
      
      this.loginService.userLogin(this.UserLoginInfo); 
      this.showLoading=true;
      // console.log(this.UserLoginInfo)   
       

    }
   
    // this.show_success_Alert = true;
    // this.router.navigate(['/admin'], { relativeTo: this.activatedRoute });
    // this.loginService.fetchData();
   // this.loginService.postData(this.UserLoginInfo)
  }

  ngOnInit(): void {
    this.loginService.flagError.subscribe((errorFlag =>
      {
        this.show_failure_alert=errorFlag;
        this.showLoading=false;
      }
      ));
    this.loginService.flagSucess.subscribe((sucessFlag =>
      {
        this.show_success_Alert=sucessFlag;
        this.showLoading=false;
      }
      ))

  }

}