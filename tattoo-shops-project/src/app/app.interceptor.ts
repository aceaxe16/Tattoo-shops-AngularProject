import { HttpEvent, HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "./environment/entironment";
import { authenticationEnvironmentn } from "./environment/authenticationEnvironment";
import { UserService } from "./user/user.service";

const {appUrl} = environment;
const {apiUrl} = authenticationEnvironmentn;

@Injectable()
export class AppInterceptor implements HttpInterceptor{

    constructor(private router:Router, private userService: UserService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        req = req.clone({
            setHeaders:{
                Authorization: `Bearer ${this.userService.getToken()}`
            },
          });
        let token = this.userService.getToken();  
        debugger
          
      
          return next.handle(req);
        }

        // return next.handle(req).pipe(
        //     catchError((err) => {
        //         if(err.statue === 401){
        //             this.router.navigate(['/home'])
        //         }
        //         return [err]
        //     })


        // )
    }



export const appIntercentorProvider: Provider ={
    multi:true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS
}