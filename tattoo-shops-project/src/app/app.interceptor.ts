import { HttpEvent, HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { UserService } from "./user/user.service";



@Injectable()
export class AppInterceptor implements HttpInterceptor{

    constructor(private router:Router, private userService: UserService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        req = req.clone({
            setHeaders:{
                Authorization: `Bearer ${this.userService.getToken()}`
            },
          });           
          
      
        return next.handle(req).pipe(
            catchError((err) => {
                if(err.status === 401){
                    this.router.navigate(['/login'])
                }
                return [err]
            })


        )}        
    }



export const appIntercentorProvider: Provider ={
    multi:true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS
}