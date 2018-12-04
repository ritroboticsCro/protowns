import { NgModule } from "@angular/core";
import { LandingComponent } from "./landing.component";
import { SharedModule } from "../../shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        LandingComponent
    ],
    imports: [
        SharedModule,
        BrowserModule, 
    ]
})
export class LandingModule {}