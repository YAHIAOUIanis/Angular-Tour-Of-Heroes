import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //Le messageService propriété doit être publique, car vous allez y être lié dans le modèle
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
