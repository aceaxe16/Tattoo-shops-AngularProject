import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ShopsGalleryComponent } from './shops-gallery/shops-gallery.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopsGalleryComponent,
    ShopDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
