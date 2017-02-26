import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {User} from '../models/user'

@Injectable()
export class LoginService {
  // TODO: Better use throw exception
  // https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/catch.md
  login(login: string, pwd: string): Observable<User>{
    if(login == 'q' && pwd == 'q'){
      return Observable.of(new User('ivan'));
    }else{
      return Observable.of(null);
    }
  }
}