import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FirstComponent
    }, {
      path: 'second',
      loadChildren: () => import('../second/second.module').then(m => m.SecondModule),
    }]),
    SharedModule,
  ],
  declarations: [FirstComponent]
})
export class FirstModule { }
