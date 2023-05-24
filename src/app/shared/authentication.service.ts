import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { API_URL_BASE } from 'src/environments/environment';
import { UserLoginInfo } from '../login/user-login.model';

export interface AuthResponseData{
  "Token": string,
  "Expiration": string,
  "Message" ?: string 
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  loginEndpoint='Account/SignIn';
  // userLoginResponse = new BehaviorSubject<LoginResponseModel |null>(null);

  constructor(private httpRequest:HttpClient) {
  }

  // Fetching Login Calling with API
  fetchLoginIn(userLoginInfo:UserLoginInfo){
      return this.httpRequest.post<AuthResponseData>(API_URL_BASE +this.loginEndpoint,userLoginInfo)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = "error happened";
      // A client-side or network error occurred. Handle it accordingly.
    if (error.error.status === 401) {
      errorMessage="Please Contact your administrator to make Account"
      return throwError(errorMessage);
    } 
      // The backend returned an unsuccessful response code.
    else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
      errorMessage=error.error;
      return throwError(errorMessage);
    }
    // Return an observable with a user-facing error message.
    //return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
