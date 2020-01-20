import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common';*/
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
/*import { AuthGuard, CanDeactivateGuard, UserProfileService } from './core';*/
import { ItemComponent } from './items/item.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminModule } from './admin/admin.module';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home', },
  { path: 'home', component: HomeComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
 /*
{
  path: '',
  loadChildren: 'app/admin/admin.module#AdminModule',
 canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],

  
  canLoad: [AuthGuard],
},
*/
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    //AdminModule,
  ],
  declarations: []
})
export class AppRoutingModule { }

