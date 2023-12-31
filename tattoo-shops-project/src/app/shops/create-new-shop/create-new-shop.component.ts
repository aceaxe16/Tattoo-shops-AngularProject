import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/shops/shopServices.service';

@Component({
  selector: 'app-create-new-shop',
  templateUrl: './create-new-shop.component.html',
  styleUrls: ['./create-new-shop.component.css']
})
export class CreateNewShopComponent {
  from = this.fb.group({
    name:['', [Validators.required, Validators.minLength(4)]],
    imageUrl:['',[Validators.required, Validators.minLength(4)]]
  })
  constructor(private fb: FormBuilder, private router:Router, private shopService: ShopService){}

  createShop():void{
    if(this.from.invalid){return}
    const {
      name,
      imageUrl
    } = this.from.value;

    this.shopService.createShop(name!, imageUrl!).subscribe((res) => {
      this.router.navigate(['/shops']);
      
    })
    
  }

}
