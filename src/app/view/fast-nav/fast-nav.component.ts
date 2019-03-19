import { Component, OnInit } from '@angular/core';
import { FastNavItem } from '../../classes/fastNavItem';

@Component({
  selector: 'app-fast-nav',
  templateUrl: './fast-nav.component.html',
  styleUrls: ['./fast-nav.component.css']
})
export class FastNavComponent implements OnInit {

  fastNav: FastNavItem[] = [
    {
      icon: 'register',
      name: '预约挂号',
      describe: '请提前一天挂号预约',
      bg: 'blue',
      link: '/hospitalGuide',
      to: 'register'
    }, {
      icon: 'process',
      name: '就医指南',
      describe: '详细就医流程',
      bg: 'green',
      link: '/hospitalGuide',
      to: 'process'
    }, {
      icon: 'guide',
      name: '交通路线',
      describe: '为您提供方便的路线',
      bg: 'orange',
      link: '/hospitalGuide',
      to: 'guide'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
