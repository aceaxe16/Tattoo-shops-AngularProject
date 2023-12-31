import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { environment } from './environment/entironment';
import { Shop } from './types/shop';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTattooShops(){
    const {localServerShops} = environment;
    return this.http.get<Shop[]>(`${localServerShops}/catalog`)
  }

  getOneTattooShop(id: string){
    const {localServerShops} = environment;
    return this.http.get<any>(`${localServerShops}/${id}/details`)
  }
}
