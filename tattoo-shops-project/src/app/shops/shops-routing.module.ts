import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopsGalleryComponent } from './shops-gallery/shops-gallery.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';



const routes: Routes = [{
    path:"shops",
    children:[
        {
            path:'',
            pathMatch:'full',
            component: ShopsGalleryComponent
        },
        {
            path:':shopId',
            component: ShopDetailsComponent
        }
        
    ],
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }