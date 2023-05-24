import { JwtHelperService } from '@auth0/angular-jwt';

export class LoginResponseModel{
    jwtHelper = new JwtHelperService();
    constructor(
       private _token:string ,
       private _tokenExpirationDate:Date 
    ){}


    getToken(){
        if(!this._token || this.jwtHelper.isTokenExpired(this._token)){
            localStorage.removeItem('userLogin');
            return null;
        }
        return this._token;
    }
}
