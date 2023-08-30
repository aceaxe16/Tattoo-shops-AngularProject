import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { authenticationEnvironmentn } from '../environment/authenticationEnvironment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();
  user: User | undefined; 
  subscription: Subscription;

  constructor(private http: HttpClient){
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
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
      }).pipe(tap((res) => this.user$$.next(res.registeredUser)))
    }

    
  login(email: string, password: string){
    const {apiUrl} = authenticationEnvironmentn;
      return this.http.post<any>(`${apiUrl}/login`, {        
        email,
        password        
      }).pipe(tap((res) => this.user$$.next(res.user)));
  }

  logout(){
    localStorage.removeItem('token');    
  }


  getProfile() {
    const {apiUrl} = authenticationEnvironmentn;
    return this.http
      .get<User>(`${apiUrl}/profile`);
  }

  updateProfile(username: string, email: string) {
    const {apiUrl} = authenticationEnvironmentn;
    return this.http
      .put<User>(`${apiUrl}/update`, { username, email,});
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
