import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { LandingComponent } from './landing/landing.component';
import { CustomerTopNavigationComponent } from './shared/customer-top-navigation/customer-top-navigation.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { OverallReportComponent } from './landing/overall-report/overall-report.component';
import { InteractionComponent } from './landing/interaction/interaction.component';
import { ContactComponent } from './contact/contact.component';
import { ReportsComponent } from './reports/reports.component';
import { InfoDialogComponent } from './contact/info-dialog/info-dialog.component';
import { MaterialElevationDirective } from './contact/material-elevation.directive';
import { TaskComponent } from './landing/task/task.component';
import { CalendarComponent } from './landing/calendar/calendar.component';

@NgModule({
  declarations: [
    LandingComponent,
    CustomerTopNavigationComponent,
    LayoutComponent,
    OverallReportComponent,
    InteractionComponent,
    ContactComponent,
    ReportsComponent,
    InfoDialogComponent,
    MaterialElevationDirective,
    TaskComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  entryComponents: [
    InfoDialogComponent
]
})
export class CustomerModule { }
