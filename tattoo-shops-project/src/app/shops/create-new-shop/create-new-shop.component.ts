import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShopService } from 'src/app/shop-services/shopServices.service';

@Component({
  selector: 'app-create-new-shop',
  templateUrl: './create-new-shop.component.html',
  styleUrls: ['./create-new-shop.component.css']
})
export class CreateNewShopComponent {
  from = this.fb.group({
    name:[''],
    imageUrl:['']
  })
  constructor(private fb: FormBuilder, private shopService: ShopService){}

  createShop():void{
    if(this.from.invalid){return}
    const {
      name,
      imageUrl
    } = this.from.value;

    this.shopService.createShop(name!, imageUrl!).subscribe((res) => {
      console.log(res);
      
    })
    
  }

}
