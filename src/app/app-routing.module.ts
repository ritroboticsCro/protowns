import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: 'app/areas/customers/customer.module#CustomersModule' },
      { path: 'admin', loadChildren: 'app/areas/admin/admin.module#AdminModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
