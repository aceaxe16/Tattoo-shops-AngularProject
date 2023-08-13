import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopsGalleryComponent } from './shops-gallery/shops-gallery.component';
import { ShopsRoutingModule } from './shops-routing.module';
import { CreateNewShopComponent } from './create-new-shop/create-new-shop.component';



@NgModule({
  declarations: [
    ShopDetailsComponent,
    ShopsGalleryComponent,
    CreateNewShopComponent
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule
  ]
})

export class ShopsModule { }
