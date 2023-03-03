import { BehaviorSubject, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { User } from './user-model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable()
export class AuthService {
  user = new BehaviorSubject<User>(null!);

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
    .pipe(catchError(this.handleError),
    tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn);
    })
    );
  }

  login(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCOZEVT72P0NaNKsw22piRPZ6fXjwyWYC0',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
    )
    .pipe(catchError(this.handleError),
    tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn);
    }));
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number, ){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expirationDate
      );
      this.user.next(user)
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error ocurred!';
    if (!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    }
    switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is invalid.';
    }
    return throwError(errorMessage);
  }
}
