import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MenuItem } from '../../classes/MenuItem';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  menu = [
    {
      name: '首页',
      link: '/home',
      selected: false
    }, {
      name: '关于我们',
      link: '/aboutUs',
      selected: false
    }, {
      name: '就医指南',
      link: '/hospitalGuide',
      selected: false
    }, {
      name: '科室信息',
      link: '/departmentInfo',
      selected: false
    }, {
      name: '就医环境',
      link: '/hospitalEnv',
      selected: false
    }, {
      name: '医院招聘',
      link: '/hospitalRecruit',
      selected: false
    }, {
      name: '联系我们',
      link: '/contactUs',
      selected: false
    },
  ];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => { this.statusChange(location.pathname)});
  }

  statusChange(link: string): MenuItem {
    let selectedItem;

    for (const item of this.menu) {
      if (item.link === link) {
        item.selected = true;
        selectedItem = item;
        continue;
      }
      item.selected = false;
    }

    return selectedItem;
  }

  statusClear(): void {
    for (const item of this.menu) {
      item.selected = false;
    }
  }

}
