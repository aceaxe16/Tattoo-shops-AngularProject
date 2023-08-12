import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from '../environment/authenticationEnvironment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient){}
   

  register(
    username: string, 
    email: string, 
    password: string, 
    )
    { 
      const {apiUrl} = environment;
      return this.http.post<any>(`${apiUrl}/register`, {
        username,
        email,
        password        
      })
    }

  login(email: string, password: string){
    const {apiUrl} = environment;
      return this.http.post<any>(`${apiUrl}/login`, {        
        email,
        password        
      })
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
