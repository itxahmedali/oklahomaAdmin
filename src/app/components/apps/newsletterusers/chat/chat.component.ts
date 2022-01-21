import { Component, OnInit } from '@angular/core';
import { ChatUsers } from '../../../../shared/model/chat.model';
import { ChatService } from '../../../../shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class newsletteruser implements OnInit {
  public company = [
    {
      id: 1,
      email: "test@gamil.com",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
    {
      id: 2,
      email: "test@gamil.com",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
    {
      id: 3,
      email: "test@gamil.com",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
    {
      id: 4,
      email: "test@gamil.com",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
    {
      id: 5,
      email: "test@gamil.com",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
    {
      id: 6,
      email: "test@gamil.com",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
  ];
  constructor() {}

  ngOnInit() {} 
  // filter functionality
  updateFilter(event) {
    // const val = event.target.value.toLowerCase();

    // // filter our data
    // const temp = this.temp.filter(function(d) {
    //   return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    // });

    // // update the rows
    // this.rows = temp;
    // // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  } 
}
