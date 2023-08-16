import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { authenticationEnvironmentn } from '../environment/authenticationEnvironment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){
  }

  

  register(
    username: string, 
    email: string, 
    password: string, 
    )
    { 
      const {apiUrl} = authenticationEnvironmentn;
      return this.http.post<any>(`${apiUrl}/register`, {
        username,
        email,
        password        
      }) 
    }

  login(email: string, password: string){
    const {apiUrl} = authenticationEnvironmentn;
      return this.http.post<any>(`${apiUrl}/login`, {        
        email,
        password        
      }) 
  }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
