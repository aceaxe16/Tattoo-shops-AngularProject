import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Shop } from 'src/app/types/shop';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit{
  shop:undefined | Shop;

  constructor(private userService:UserService, private apiService:ApiService, private activeRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.getShopInfo();   
  }

  getShopInfo():void{
    const shopId = this.activeRoute.snapshot.params['shopId'];
    this.apiService.getOneTattooShop(shopId).subscribe((res) => {
      this.shop = res.shop;  
      console.log(res.shop.ownerId);
      
      
    })
    console.log(this.userService.user);
    
  }

  isOwner():boolean{
    if(this.shop?.ownerId == this.userService.user?._id ){
      return true
    }else{
      return false
    }
  }

}
