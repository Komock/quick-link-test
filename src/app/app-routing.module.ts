import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
}, {
  path: 'first',
  loadChildren: () => import('./first/first.module').then(m => m.FirstModule),
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
    })
  ],
  exports: [
    RouterModule,
    QuicklinkModule,
  ]
})
export class AppRoutingModule { }
