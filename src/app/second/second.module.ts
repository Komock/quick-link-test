import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SecondComponent } from './second.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: SecondComponent,
    }, ]),
    SharedModule,
  ],
  declarations: []
})
export class SecondModule { }
