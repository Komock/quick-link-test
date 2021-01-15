import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  date = moment().format();

}
