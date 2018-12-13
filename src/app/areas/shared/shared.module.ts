import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { CustomMaterialModule } from './material/custom-material.module';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

const SHARED_COMPONENTS = [
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    CustomMaterialModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    CustomMaterialModule,
    ChartsModule,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
