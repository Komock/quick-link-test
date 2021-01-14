import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  navLinks = [{
    routerLink: '/first',
    title: 'first',
    subitems: [{
      routerLink: '/first/second',
      title: 'second',
    }]
  }];

  constructor() { }

  ngOnInit() {
  }

}
