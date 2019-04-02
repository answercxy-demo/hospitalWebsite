import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  title = {
    main: '联系我们',
    vice: 'CONTACT US'
  }

  findTitle = {
    main: '怎么找到我们',
    vice: 'HOW TO FIND US'
  }

  contactTitle = {
    main: '联系我们',
    vice: 'CONTACT US'
  }

  textareaTip = '您的留言';

  items = [
    {
      icon: 'car',
      name: '汽车',
      method: '兴义市马岭镇龙井村兴马大道旁'
    }, {
      icon: 'bus',
      name: '公交车',
      method: '乘坐2路6路公交车到龙井客运北站下车后往龙井农贸市场方向行走500米'
    }
  ];

  inputList = [
    {
      name: 'name',
      icon: 'name',
      placeholder: '您的名字'
    }, {
      name: 'phone',
      icon: 'phone',
      placeholder: '您的电话'
    }, {
      name: 'email',
      icon: 'email',
      placeholder: '您的邮箱'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
