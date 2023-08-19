import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/entironment';
import { TattooPost} from '../types/tattoo-post'

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  //Add _ownerId
  createShop(imageUrl: string, description:string){
    const {localServerShops} = environment;
    return this.http.post<any>(`${localServerShops}/create`, {
      imageUrl,
      description             
    })
  }

  createPost(imageUrl:string, description:string, shopId: string){
    const {localServerShops} = environment;
    return this.http.post<any>(`${localServerShops}/${shopId}/create-post`,
    {imageUrl,
    description
  })
  }

  getPosts(shopId:string){
    const {localServerPosts}  = environment;
    return this.http.get<TattooPost[]>(`${localServerPosts}/${shopId}`)
  }

  getCurrentPost(postId:string){
    const {localServerPosts} = environment;
    return this.http.get<any>(`${localServerPosts}/${postId}`)
  }
}
