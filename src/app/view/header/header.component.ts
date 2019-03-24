import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titleAlt = '兴义人安精神病医院';

  //titleSource = 'http://www.xyrenan.com/img/images/logo_xw_02.png';
  titleSource = '../../../assets/img/top_title.png';

  phoneIconSource = '../../../assets/img/phone.png';

  phoneNumber = '0859-3553595';

  constructor() { }

  ngOnInit() {
  }

}
