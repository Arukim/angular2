import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {User} from '../models/user'

@Injectable() 
export class LoginService {   

  login(login : string, pwd: string) : Observable<User>{
    if(login == "q" && pwd == "q"){
      return Observable.of(new User("ivan"));  
    }else{
      return Observable.of(null);
    }
}