import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  @Input() data: any;

  bannerSrc = '';

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getTopImgs();
  }

  /**
   * @description: 获取头部图片
   * @param {type} 
   * @return: 
   */
  getTopImgs(): void {
    this.homeService.getTopImgs().subscribe((items) => {
      this.bannerSrc = items[0].src;
    });
  }

}
