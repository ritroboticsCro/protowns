import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { CustomMaterialModule } from './material/custom-material.module';
import { RouterModule } from '@angular/router';

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
    FormsModule 
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    CustomMaterialModule,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
