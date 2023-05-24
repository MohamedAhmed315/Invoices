import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, throwError } from 'rxjs';
import { API_URL_BASE } from 'src/environments/environment';
import { UserChangePassword } from '../login/change-password/change-password.model';

@Injectable({
  providedIn: 'root'
})
export class HandleApiCallsService {
  changePasswordEndpoint='Account/ChangePassword';
  ErrorMessage = new BehaviorSubject<string>("");
  SucessMessage = new BehaviorSubject<string>("");
  flagError = new Subject<boolean>();
  flagSucess = new Subject<boolean>();


  constructor(private httpRequest:HttpClient) { }
  
  // Fetching Change Password Calling with API
  fetchUserChangePassword(UserChangePassword:UserChangePassword){
    return this.httpRequest.post(API_URL_BASE+this.changePasswordEndpoint,UserChangePassword)
    .pipe(catchError(this.handleError))
  }

  // Handling Sucess and error operations
  sucessCalling(SucessMessage:string,flagSucess:boolean){
    this.flagSucess.next(flagSucess);
    this.SucessMessage.next(SucessMessage);
  }
  errorCalling(ErrorMessage:string,flagError:boolean){
    this.flagSucess.next(flagError);
    this.SucessMessage.next(ErrorMessage);
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = "error happened";
    if (error.error.status === 401) {
      errorMessage="Please Contact your administrator to make Account"
      return throwError(errorMessage);
    } 
    else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
      errorMessage=error.error;
      return throwError(errorMessage);
    }
  }
}
