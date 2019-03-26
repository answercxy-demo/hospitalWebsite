import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-recruit',
  templateUrl: './hospital-recruit.component.html',
  styleUrls: ['./hospital-recruit.component.css']
})
export class HospitalRecruitComponent implements OnInit {

  title = {
    main: '人才招聘',
    vice: 'RECRUITMENT'
  };

  constructor() { }

  ngOnInit() {
  }

}
