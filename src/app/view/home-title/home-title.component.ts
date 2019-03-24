import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.css']
})
export class HomeTitleComponent {

  @Input() title: any;

  constructor() { }


}
