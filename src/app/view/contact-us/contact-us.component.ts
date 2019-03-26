import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  title = {
    main:'联系我们',
    vice: 'CONTACT US'
  }

  constructor() { }

  ngOnInit() {
  }

}
