import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from 'ng-fullcalendar';

import { LandingComponent } from './landing.component';
import { InteractionComponent } from './interaction/interaction.component';
import { OverallReportComponent } from './overall-report/overall-report.component';
import { TaskComponent } from './task/task.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
    declarations: [
        LandingComponent,
        OverallReportComponent,
        InteractionComponent,
        TaskComponent,
        CalendarComponent
    ],
    imports: [
        SharedModule,
        BrowserModule,
        FullCalendarModule
    ]
})
export class LandingModule {}
