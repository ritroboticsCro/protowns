import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTopNavigationComponent } from './customer-top-navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/areas/shared/shared.module';
import { NgMatSearchBarModule } from 'ng-mat-search-bar'


@NgModule({
  declarations: [
    CustomerTopNavigationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    NgMatSearchBarModule
    ]
})
export class CustomerTopNavigationModule { }
