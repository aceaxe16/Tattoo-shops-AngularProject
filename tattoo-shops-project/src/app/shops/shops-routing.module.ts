import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopsGalleryComponent } from './shops-gallery/shops-gallery.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { CreateNewShopComponent } from './create-new-shop/create-new-shop.component';
import { AuthGuard } from '../auth.guard';

import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';



const routes: Routes = [
    {
    path:"shops",
    children:[
        {
            path:'',
            pathMatch:'full',
            component: ShopsGalleryComponent
        },        
        {
            path:':shopId',
            children:[
                {
                    path:"",
                    pathMatch:"full",
                    component: ShopDetailsComponent
                },
                {
                    path:'create-post',
                    component:AddPostComponent
                },
                {
                    path:':postId',
                    component: EditPostComponent
                },
                
            ]
            
        }
        
    ],

},{
    path:'create-shop',
    component:CreateNewShopComponent,
    canActivate: [AuthGuard]
},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }