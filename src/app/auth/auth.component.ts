import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService, AuthResponseData } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  isLoginMode = true;
  isLoading = false;
  error: string;

  constructor(private authService: AuthService, private router: Router,
    private store: Store<fromApp.AppState>) { }

    ngOnInit() {
      this.store.select('auth').subscribe(authState => {
        this.isLoading = authState.loading;
        this.error = authState.authError;
        if(this.error){
         // this.showErrorAlert(errorMessage);
        }
      });
    }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode){
     this.store.dispatch(new AuthActions.LoginStart({email: email, password: password}));
    } else {
      authObs = this.authService.signup(email, password)
    }



    // authObs.subscribe(resData => {
    //   console.log(resData);
    //   this.isLoading = false;
    //   this.router.navigate(['/recipes']);
    // }, errorMessage => {
    //   console.log(errorMessage);
    //   this.error = errorMessage;
    //   this.isLoading = false;
    // });

    form.reset();
  }
}
