import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '', children: [
          { path: '', loadChildren: './areas/customer/customer.module#CustomerModule' },
          { path: 'admin', loadChildren: './areas/admin/admin.module#AdminModule' }
        ]
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
