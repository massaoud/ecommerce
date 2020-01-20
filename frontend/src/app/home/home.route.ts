import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const HOME_ROUTE: Route = {
  path: 'home',
  //    redirectTo:"ddddd",
  component: HomeComponent,
  data: {
    authorities: [],
    pageTitle: 'home'
  }

 };
