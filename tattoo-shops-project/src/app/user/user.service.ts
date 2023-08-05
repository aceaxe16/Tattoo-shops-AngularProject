import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { environment } from '../environment/entironment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  private user$ = this.user$$.asObservable();
  user: User | undefined;

  subscription: Subscription;
  


  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    })
   }
   

  register(
    username: string, 
    email: string, 
    password: string, 
    )
    { 
      const {appUrl} = environment;
      return this.http.post<User>(`${appUrl}/Users`, {
        username,
        email,
        password        
      }).pipe(tap((user) => this.user$$.next(user)));

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
