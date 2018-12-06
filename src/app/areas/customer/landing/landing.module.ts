import { NgModule } from "@angular/core";
import { LandingComponent } from "./landing.component";
import { SharedModule } from "../../shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { OverallReportComponent } from './overall-report/overall-report.component';

@NgModule({
    declarations: [
        LandingComponent,
        OverallReportComponent
    ],
    imports: [
        SharedModule,
        BrowserModule,
    ]
})
export class LandingModule {}