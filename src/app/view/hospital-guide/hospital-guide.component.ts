import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-hospital-guide',
  templateUrl: './hospital-guide.component.html',
  styleUrls: ['./hospital-guide.component.css']
})
export class HospitalGuideComponent implements OnInit {

  bannerData = {
    apiName: 'hospitalGuide',
    title: {
      main: '就医指南',
      vice: 'MEDICAL GUIDE',
    }
  }

  nav = [
    {
      name: '',
      to: 'knowledge',
      icon: 'knowledge',
      color: '#00ACDB',
      content: '',
      selected: true
    }, {
      name: '',
      to: 'register',
      icon: 'register',
      color: '#FA565F',
      content: '',
      selected: false
    }, {
      name: '',
      to: 'process',
      icon: 'process1',
      color: '#45C7DA',
      content: '',
      selected: false
    }, {
      name: '',
      to: 'guide',
      icon: 'guide',
      color: '#4FCD84',
      content: '',
      selected: false
    }
  ]

  content = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit() {

    this.bindRouterChange();

    this.getHospitalGuide();

  }

  /**
   * @description: 监听url参数to的变化
   * @param {} 
   * @return: void 
   */
  bindRouterChange() {
    this.activatedRoute.queryParams.subscribe((queryObject) => {
      const to = queryObject.to;
      if (!!to) {
        this.navChange(to);
        this.contentChange(to);
      }
    })
  }

  /**
   * @description: 获取医院导航各个模块信息
   * @param {type} 
   * @return: 
   */
  getHospitalGuide(): void {
    this.homeService.getHospitalGuide().subscribe((items) => {
      items.forEach((item, index, self) => {
        if (index < 4) {
          this.nav[index].content = item.contents;
          this.nav[index].name = item.moduleName;
        }
      });

      this.toSelectedPart(this.activatedRoute.snapshot.queryParams.to);
    });
  }

  /**
   * @description: 选择板块 
   * @param {type} 
   * @return: 
   */
  toSelectedPart(to: string): void {
    switch (to) {
      case 'knowledge':
        this.navChange(to);
        this.contentChange(to);
        break;

      case 'register':
        this.navChange(to);
        this.contentChange(to);
        break;

      case 'process':
        this.navChange(to);
        this.contentChange(to);
        break;

      case 'guide':
        this.navChange(to);
        this.contentChange(to);
        break;

      default:
        this.navChange('knowledge');
        this.contentChange('knowledge');
        break;
    }

  }

  /**
   * @description: 菜单变动
   * @param {type} 
   * @return: 
   */
  navChange(to: string): void {
    for (let item of this.nav) {
      if (item.to === to) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    }
  }

  /**
   * @description: 内容变动 
   * @param {type} 
   * @return: 
   */
  contentChange(to: string): void {
    for (let item of this.nav) {
      if (item.to === to) {
        this.content = item.content;
      }
    }
  }

}
