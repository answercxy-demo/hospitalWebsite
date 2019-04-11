import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { MessageService } from '../../service/message-service.service';

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

  constructor(private homeService: HomeService, private messageService: MessageService) { }

  ngOnInit() {

  }

  /**
   * @description: 提交建议
   * @param {type} 
   * @return: 
   */
  submitSuggest(): void {

    const check = this.check();
    let num = sessionStorage.getItem('contactNum');

    if (check) {
      if(!!num && parseInt(num)>10){
        this.messageService.add('留言已达上限，请下次再来呢', 'warn');
        return;
      }
      let formData = new FormData(document.querySelector('form'));
      this.homeService.submitSuggest(formData).subscribe(data => {
        if (data.status === 200) {
          !!num ? sessionStorage.setItem('contactNum', String(parseInt(num)+1)) : sessionStorage.setItem('contactNum', '1');
          this.messageService.add('恭喜您，已经留言成功', 'success');
        } else {
          this.messageService.add('不好意思，留言好像出了什么小故障呢，请稍后再试', 'warn');
        }
      });
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
        this.messageService.add('不能有空选项', 'warn');
        return false;
      }
      if (/[#\$%\^&\*]+/g.test(item.value)) {
        this.messageService.add('非法字符', 'warn');
        return false;
      }
    }
    return true;
  }



}
