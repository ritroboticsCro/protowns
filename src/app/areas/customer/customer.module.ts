import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { LandingComponent } from './landing/landing.component';
import { CustomerTopNavigationComponent } from './shared/customer-top-navigation/customer-top-navigation.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { OverallReportComponent } from './landing/overall-report/overall-report.component';

@NgModule({
  declarations: [
    LandingComponent,
    CustomerTopNavigationComponent,
    LayoutComponent,
    OverallReportComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
