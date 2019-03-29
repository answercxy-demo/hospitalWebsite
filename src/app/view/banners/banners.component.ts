import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  @Input() data: any;

  banners = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {

    this.getTopImgs();

    setInterval(() => {
      this.autoSwitch();
    }, 5000);

  }

  /**
   * @description: 选择对应下标的banner显示
   * @param {type} 
   * @return: 
   */
  chooseBanner(index: number): void {
    this.banners.forEach((banner, i, banners) => {
      if (i === index) {
        banner.selected = true;
      } else {
        banner.selected = false;
      }
    })
  }

  /**
   * @description: 获取头部图片
   * @param {type} 
   * @return: 
   */
  getTopImgs(): void {
    this.homeService.getTopImgs().subscribe((items) => {
      this.banners = items.map((item, index) => {
        let banner = {
          src: item.src,
          selected: false
        }
        if (index === 0) {
          banner.selected = true;
        }
        return banner;
      });
    });
  }

  /**
   * @description: 头部图片自动切换
   * @param {type} 
   * @return: 
   */
  autoSwitch(): void {
    let switchToIndex = 0;
    this.banners.forEach((banner, index, banners) => {
      const LENGTH = banners.length
      if (banner.selected) {
        banner.selected = false;
        if (index !== LENGTH - 1) {
          switchToIndex = index + 1;
        }
      }
    });
    this.banners[switchToIndex].selected = true;
  }

}
