import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { LoginService } from '../login/services/login.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  isAuthienticatedUser:boolean = false;
  TokenObject:any;


    constructor(private authLoginService: LoginService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean |UrlTree > | Promise<boolean |UrlTree > | boolean |UrlTree{

      return  this.authLoginService.userLoginResponse.pipe(
        map(user =>
          {
            this.isAuthienticatedUser=!!user;
            console.log( this.isAuthienticatedUser)
            if(this.isAuthienticatedUser)
              {
                return true;
              }
            return this.router.createUrlTree(['admin']);
          }
          ))
      
    }
  
}


