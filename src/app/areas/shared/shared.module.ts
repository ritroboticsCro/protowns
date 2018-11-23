import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { CustomMaterialModule } from './material/custom-material.module';

const SHARED_COMPONENTS = [
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    CustomMaterialModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule 
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
