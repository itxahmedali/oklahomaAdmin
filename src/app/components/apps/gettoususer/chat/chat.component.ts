import { Component, OnInit } from '@angular/core';
import { ChatUsers } from '../../../../shared/model/chat.model';
import { ChatService } from '../../../../shared/services/chat.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-chat',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class gettoususer implements OnInit {
  public company = [
    {
      id: 1,
      page_name: "John",
      email: "klh@test.com",
      number: "1233454684654",
      message: "asdba sdasdba sdashgdas dashdgas dasdvasd asdasvd asdgasvdas",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
    {
      id: 2,
      page_name: "About Us",
      email: "klh@test.com",
      number: "1233454684654",
      message: "asdba sdasdba sdashgdas dashdgas dasdvasd asdasvd asdgasvdas",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
    {
      id: 3,
      page_name: "For Buy",
      email: "klh@test.com",
      number: "1233454684654",
      message: "asdba sdasdba sdashgdas dashdgas dasdvasd asdasvd asdgasvdas",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
    {
      id: 4,
      page_name: "For Rent",
      email: "klh@test.com",
      number: "1233454684654",
      message: "asdba sdasdba sdashgdas dashdgas dasdvasd asdasvd asdgasvdas",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
    {
      id: 5,
      page_name: "News & Articles",
      email: "klh@test.com",
      number: "1233454684654",
      message: "asdba sdasdba sdashgdas dashdgas dasdvasd asdasvd asdgasvdas",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
    },
    {
      id: 6,
      page_name: "Contact Us",
      email: "klh@test.com",
      number: "1233454684654",
      message: "asdba sdasdba sdashgdas dashdgas dasdvasd asdasvd asdgasvdas",
      editActions: "fa fa-eye",
      delActions: "fa fa-trash",
      registration: "12/12/2022",
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
