import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable()
export class AuthService {

  constructor(private http: HttpClient){
  }

  signup(email: string, password: string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOZEVT72P0NaNKsw22piRPZ6fXjwyWYC0',
      {
      email: email,
      password: password,
      returnSecureToken: true
    }
    )
    .pipe(catchError(errorRes => {
      let errorMessage = 'An unknown error ocurred!';
      if (!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already';
      }
      return throwError(errorMessage);
    }));
  }
}
