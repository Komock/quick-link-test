import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: SecondComponent,
      redirectTo: 'third',
    }, {
      path: 'third',
      loadChildren: () => import('../third/third.module').then(m => m.ThirdModule),
    }]),
    SharedModule,
  ],
  declarations: [SecondComponent]
})
export class SecondModule { }
