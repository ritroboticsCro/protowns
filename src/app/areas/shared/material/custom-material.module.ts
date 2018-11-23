import {
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatIconRegistry,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatStepperModule,
    MatMenuModule
  } from '@angular/material';

  import { NgModule } from '@angular/core';

const materialModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatPaginatorModule,
  MatTableModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatSnackBarModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatStepperModule,
  MatMenuModule
];

@NgModule({
    imports: [
        ...materialModules
    ],
    exports: [
        ...materialModules
    ],
    providers: [
        MatIconRegistry
    ]
})
export class CustomMaterialModule { }
