import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopsGalleryComponent } from './shops-gallery/shops-gallery.component';
import { ShopsRoutingModule } from './shops-routing.module';



@NgModule({
  declarations: [
    ShopDetailsComponent,
    ShopsGalleryComponent
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule
  ]
})

export class ShopsModule { }
