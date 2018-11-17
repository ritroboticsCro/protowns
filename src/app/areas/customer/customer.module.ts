import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { LandingComponent } from './landing/landing.component';
import { CustomerTopNavigationComponent } from './shared/customer-top-navigation/customer-top-navigation.component';

@NgModule({
  declarations: [LandingComponent,CustomerTopNavigationComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
  ]
})
export class CustomerModule { }
