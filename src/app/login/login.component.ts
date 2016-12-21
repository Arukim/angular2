import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login';

@Component({
  selector: 'login',
  template:
  `<div class="col-md-4">
    <h1> Stranger, login </h1>
      <div class="row" [hidden]="!showErrorMessage">
        <label>Wrong login or password</label>
      </div>
      <div class="row">
        <div class="form-group" [class.has-error]="!login.length">
          <label class="col-sm-3">Login: </label>
          <div class="col-sm-6">
            <input class="form-control" id="login"
            (blur)="onLoginBlur()"
            [(ngModel)]="login">
          </div>
          <label [hidden]="login.length" class="hint">* enter</label>
        </div>
      </div>
      <div class="row">
        <div class="form-group" [class.has-error]="!password.length">
          <label class="col-sm-3">Password: </label> 
          <div class="col-sm-6"> 
            <input class="form-control" type="password" id="password"
            (blur)="onPasswordBlur()"
            [(ngModel)]="password">
          </div>
          <label [hidden]="password.length" class="hint">* enter</label>
        </div>
      </div>
      <div class="row">
        <button class="btn btn-default" [(disabled)]="!isValid" (click)="onSubmit()">Login</button>
      </div>
  </div>`,
  styles: [`
    .hint {color: red;}
  `],
  providers: [LoginService]
  
})

export class LoginComponent implements OnInit {
  public isValid : boolean;
  public login : string;
  public password: string;
  public showErrorMessage: boolean;

  private loginRegExp : RegExp;
  private pwdRegExp: RegExp;
  

  constructor(private loginService: LoginService){
    this.login = "";
    this.password = "";
    this.loginRegExp = new RegExp("^[a-zA-Z]+$");
    this.pwdRegExp = new RegExp("^[A-Za-z0-9]+$");
  }

   ngOnInit(){
    
  }

  public onSubmit(){
    console.log("submit");
    this.loginService.login(this.login, this.password)
    .subscribe(user => {
      if(user){
        console.log(user.name);
      }else{
        console.log("wrong login");
      }
    }); 
  }

  public onLoginBlur(){
    if(!this.loginRegExp.test(this.login)){
      this.login = "";
      this.showErrorMessage = true;
    }else{
      this.showErrorMessage = false;
    }
    this.validateForm();
  }

  public onPasswordBlur(){
    if(!this.pwdRegExp.test(this.password)){
      this.password = "";
      this.showErrorMessage = true;
    }else{
      this.showErrorMessage = false;
    }
    this.validateForm();
  }

  public validateForm(){
    if(this.password.length  && this.login.length){
      this.isValid = true;
    }else{
      this.isValid = false;
    }
  }


}
