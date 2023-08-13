import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopsModule } from './shops/shops.module';
import { UserModule } from './user/user.module';
import { appIntercentorProvider } from './app.interceptor';
import { AuthGuard } from './auth.guard';



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
    ShopsModule,
    UserModule
  ],
  providers: [appIntercentorProvider, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
