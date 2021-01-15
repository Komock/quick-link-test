import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  navLinks = [{
    routerLink: '/first',
    title: 'first',
    subitems: [{
      routerLink: '/first/second',
      title: 'second',
    }]
  }];

}
