import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopsModule } from './shops/shops.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ShopsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }