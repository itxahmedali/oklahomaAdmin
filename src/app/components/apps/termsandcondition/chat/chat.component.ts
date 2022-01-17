import { Component, OnInit } from '@angular/core';
import { ChatUsers } from '../../../../shared/model/chat.model';
import { ChatService } from '../../../../shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
   // Ck editor
 public ckEditor = "Terms And Condition Content";
  

  constructor() {}

  ngOnInit() {}  
}
