import { Component } from '@angular/core';
import { MessagingService } from "./services/messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  
  message;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    const userId = 'nilesh';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }
}
