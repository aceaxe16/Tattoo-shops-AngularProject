import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/entironment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  //Add _ownerId
  createShop(name:string, description: string){
    const {localServerShops} = environment;
    return this.http.post<any>(`${localServerShops}/create`, {
      name,
      description,
             
    })
  }
}
