import { UserInterface } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../http/api.service';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor (
    private apiService: ApiService
  ) {}

  login(user): Observable<UserInterface>{
    return this.apiService.post('auth/user/authenticate', user)
    .pipe(map(data => data));
  }

  signup(user): Observable<UserInterface>{
    return this.apiService.post('auth/user/create', user)
    .pipe(map(data => data));
  }

}
