import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

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
      name: 'yourName',
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

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    // this.homeService.submitSuggest({
    //   yourName: 'mm',
    //   email: '123@qq.com',
    //   phone: 1587,
    //   leaveWord: '留言'
    // }).subscribe(data=>{alert(data)});

  }

  /**
   * @description: 提交建议
   * @param {type} 
   * @return: 
   */
  submitSuggest(): void {

    const check = this.check();

    if(check){
      
      alert('目前尚不支持');
      // this.homeService.submitSuggest({}).subscribe(data => {

      // });
    }
  }

  /**
   * @description: 表单校验 
   * @param {type} 
   * @return: 
   */
  check(): Boolean {
    const list: any[] = Array.from(document.querySelectorAll('*[data-form-text]'));
    for (let item of list) {
      console.log(item.value);
      if (item.value.length < 1) {
        alert('不能有空选项');
        return false;
      }
      if (/[#\$%\^&\*]+/g.test(item.value)) {
        alert('非法字符');
        return false;
      }
    }
    return true;
  }



}
