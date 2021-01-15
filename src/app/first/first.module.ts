import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FirstComponent } from './first.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FirstComponent,
      children: [{
        path: '',
        redirectTo: 'second',
      },
      {
        path: 'second',
        loadChildren: () => import('../second/second.module').then(m => m.SecondModule),
      }
    ]
    }]),
    SharedModule,
  ],
  declarations: []
})
export class FirstModule { }
