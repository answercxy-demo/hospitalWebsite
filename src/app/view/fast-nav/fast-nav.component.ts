import { Component, OnInit } from '@angular/core';
import { FastNavItem} from '../../classes/fastNavItem';

@Component({
  selector: 'app-fast-nav',
  templateUrl: './fast-nav.component.html',
  styleUrls: ['./fast-nav.component.css']
})
export class FastNavComponent implements OnInit {

  fastNav = [
    {
      icon: '',
      name: '',
      describe: '',
      bg: '',
      link: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
