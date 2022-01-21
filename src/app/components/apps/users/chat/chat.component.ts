import { Component, OnInit } from '@angular/core';
import { ChatUsers } from '../../../../shared/model/chat.model';
import { ChatService } from '../../../../shared/services/chat.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-chat',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UserComponent implements OnInit {
  public company = [
    {
      id: 1,
      page_name: "John",
      registration: "12/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-trash",
      
    },
    {
      id: 2,
      page_name: "About Us",
      registration: "12/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-trash",
      
    },
    {
      id: 3,
      page_name: "For Buy",
      registration: "12/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-trash",
      
    },
    {
      id: 4,
      page_name: "For Rent",
      registration: "12/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-trash",
      
    },
    {
      id: 5,
      page_name: "News & Articles",
      registration: "12/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-trash",
      
    },
    {
      id: 6,
      page_name: "Contact Us",
      registration: "12/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-trash",
      
    },
  ];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {} 
  closeResult = '';
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
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
