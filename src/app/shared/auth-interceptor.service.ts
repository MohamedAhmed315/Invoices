import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take } from 'rxjs';
import { LoginResponseModel } from '../login/services/login-response.model';
import { LoginService } from '../login/services/login.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authLoginService:LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    return this.authLoginService.userLoginResponse
      .pipe(
        take(1),
        exhaustMap(userLoginResponse => {
          const userLoginData=JSON.parse(localStorage.getItem('userLogin') || '{}');
          if (!userLoginResponse) {
            console.log("oj request header")
            return next.handle(req);

          }
          const modiefyReq = req.clone({
            setHeaders: {
              'Content-Type': 'application/json; charset=utf-8',
              'Accept': 'application/json',
              'Authorization': `Bearer ${userLoginData._token}`,
            },
          });
          console.log("set request header" )
          console.log(modiefyReq)
          return next.handle(modiefyReq);

        })
        );
        }
  }
