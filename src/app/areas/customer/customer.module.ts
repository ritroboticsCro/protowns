import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { LandingComponent } from './landing/landing.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LandingComponent, CustomerLayoutComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
