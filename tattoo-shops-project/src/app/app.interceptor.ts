import { HttpEvent, HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError } from "rxjs";
import { environment } from "./environment/entironment";

const {appUrl} = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor{

    constructor(private router:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // req = req.clone({
        //     withCredentials: true,
        //   });
      
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