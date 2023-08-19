import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { ShopsGalleryComponent } from './shops-gallery/shops-gallery.component';
import { ShopsRoutingModule } from './shops-routing.module';
import { CreateNewShopComponent } from './create-new-shop/create-new-shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTattooImageComponent } from './new-tattoo-image/new-tattoo-image.component';
import { CurrentTattooComponent } from './current-tattoo/current-tattoo.component';
import { EditPostComponent } from './edit-post/edit-post.component';





@NgModule({
  declarations: [
    ShopDetailsComponent,
    ShopsGalleryComponent,
    CreateNewShopComponent,
    NewTattooImageComponent,
    CurrentTattooComponent,
    EditPostComponent,
    
    
  ],
  imports: [
    CommonModule,
    ShopsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class ShopsModule { }
