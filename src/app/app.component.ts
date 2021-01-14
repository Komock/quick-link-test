import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navLinks = [{
    routerLink: '/first',
    title: 'first',
    subitems: [{
      routerLink: '/first/second',
      title: 'second',
    }]
  }];

}
