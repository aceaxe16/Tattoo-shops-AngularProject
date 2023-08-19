import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Shop } from 'src/app/types/shop';
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

  constructor(private fb: FormBuilder,
    private userService:UserService,
    private shopService: ShopService,
    private apiService:ApiService,
    private activeRoute:ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getShopInfo();   
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

    this.togglePostMode()
    
  }

}
