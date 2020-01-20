import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AdminRoutingModule, routedComponents } from './admin-routing.module';

@NgModule({
  imports: [AdminRoutingModule],
  declarations: [routedComponents],
})
export class AdminModule { }