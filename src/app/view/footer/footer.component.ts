import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  titleAlt = '兴义人安精神病医院';

  //titleSource = 'http://www.xyrenan.com/img/images/footer_xwtp_06.png';
  titleSource = '../../../assets/img/bottom_title.png';

  ICPInfo = 'ICP备案信息：黔ICP备18010977号';

  hospitalGuide = {
    title: '就医指南',
    items: [{
      name: '来院路线',
      link: {
        path: '/hospitalGuide',
        to: 'guide'
      }
    }, {
      name: '门诊流程',
      link: {
        path: '/hospitalGuide',
        to: 'process'
      }
    }, {
      name: '就诊须知',
      link: {
        path: '/hospitalGuide',
        to: 'knowledge'
      }
    }, {
      name: '网上预约挂号',
      link: {
        path: '/hospitalGuide',
        to: 'register'
      }
    }]
  }

  contactUs = {
    title: '联系我们',
    items: [{
      name: '医院地址：',
      value: '乘坐2路6路公交车到龙井客运北站下车后往龙井农贸市场方向行走500米'
    }, {
      name: '联系电话：',
      value: '18785975110'
    }, {
      name: '门诊时间：',
      value: '周一~周日 8:00-17:30'
    }]
  }

  weixin = {
    img: {
      //source: 'http://www.xyrenan.com/img/images/footer_xwtp_08.png',
      source: '../../../assets/img/weixin.png',
      width: 100,
      height: 100
    },
    describe: '医院官方微信'
  }

  constructor() { }

  ngOnInit() {
  }

}
