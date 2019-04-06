import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-static-title',
  templateUrl: './static-title.component.html',
  styleUrls: ['./static-title.component.css']
})
export class StaticTitleComponent implements OnInit {

  @Input() title: any;

  constructor() { }

  ngOnInit() {
  }

}
