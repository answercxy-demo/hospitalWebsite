import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospital-guide',
  templateUrl: './hospital-guide.component.html',
  styleUrls: ['./hospital-guide.component.css']
})
export class HospitalGuideComponent implements OnInit {

  bannerData = {
    title: {
      main: '就医指南',
      vice: 'MEDICAL GUIDE',
    }
  }

  nav = [
    {
      name: '门诊须知',
      to: 'knowledge',
      icon: 'knowledge',
      color: '#00ACDB',
      selected: true
    }, {
      name: '预约挂号',
      to: 'register',
      icon: 'register',
      color: '#FA565F',
      selected: false
    }, {
      name: '就医流程',
      to: 'process',
      icon: 'process1',
      color: '#45C7DA',
      selected: false
    }, {
      name: '交通指南',
      to: 'guide',
      icon: 'guide',
      color: '#4FCD84',
      selected: false
    }
  ]

  content = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.toSelectedPart(this.activatedRoute.snapshot.queryParams.to);
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

    console.log(this.nav);
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
    this.content = `这里的内容是${to}`;
  }

}
