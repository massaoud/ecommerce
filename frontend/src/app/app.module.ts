import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './/app-routing.module';
import { AdminModule } from './admin/admin.module';
import { ItemComponent } from './items/item.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HOME_ROUTE } from './home/home.route';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CarouselModule , CollapseModule} from 'ngx-bootstrap';
//import { ErrorsComponent } from './layouts/errors/errors.component';
//import { NavbarComponent } from './layout/navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    PageNotFoundComponent,
    // ErrorsComponent,
  //  NavbarComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AdminModule
   // RouterModule.forRoot([HOME_ROUTE] , {useHash: true}), 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { } 
