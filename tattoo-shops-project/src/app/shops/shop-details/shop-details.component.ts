import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import { Shop } from 'src/app/types/shop';
import { TattooPost } from '../../types/tattoo-post';

import { UserService } from 'src/app/user/user.service';
import { ShopService } from '../shopServices.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit{
  shop:undefined | Shop;
  isPostMode: boolean = false;
  postsList: TattooPost[] = []

  

  constructor(private fb: FormBuilder,
    private userService:UserService,
    private shopService: ShopService,
    private apiService:ApiService,
    private activeRoute:ActivatedRoute,
    private router: Router,
    ){}

  ngOnInit(): void {
    this.getShopInfo();
    const shopId = this.activeRoute.snapshot.params['shopId'];    
    
    this.shopService.getPosts(shopId!).subscribe((res) => {
      this.postsList = res
    })
    
  }

  getShopInfo():void{
    const shopId = this.activeRoute.snapshot.params['shopId'];
    this.apiService.getOneTattooShop(shopId).subscribe((res) => {
      this.shop = res.shop;     
    })    
  }

  isOwner():boolean{
    if(this.shop?.ownerId == this.userService.user?._id ){
      return true
    }else{
      return false
    }
  }

  from = this.fb.group({
    imageUrl:[''],
    description:[''],
  })
  
  togglePostMode():void{
    this.isPostMode = !this.isPostMode
  } 

  createPost(){
    if(this.from.invalid){return}
    const {
      imageUrl,
      description
    } = this.from.value;
    console.log(imageUrl, description);
    const shopId = this.shop?._id    

    this.shopService.createPost(imageUrl!, description!, shopId!).subscribe(() => {
      this.isPostMode = !this.isPostMode    
    })
       
  }

  postListIsEmplty():boolean{
    if(this.postsList.length == 0){
      return true
    }else{
      return false
    }
  }

}
