import { Component } from '@angular/core';
import { MessageService } from './service/message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private messageService: MessageService) {
    this.messageService.add('当前处于调测阶段，请提出您的宝贵建议', 'info');
   }
}
