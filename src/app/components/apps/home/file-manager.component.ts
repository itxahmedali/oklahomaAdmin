import { Component, OnInit } from "@angular/core";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as $ from "jquery";
import Swal from 'sweetalert2'
@Component({
  selector: "app-file-manager",
  templateUrl: "./file-manager.component.html",
  styleUrls: ["./file-manager.component.scss"],
})
export class FileManagerComponent implements OnInit {
 
  public url:any;
  public company = [
    {
      id: 1,
      page_name: "Home",
      page_title: "Find Your Dream House By Us",
      editActions: "fa fa-edit",
    },
    {
      id: 2,
      page_name: "About Us",
      page_title: "About Us",
      editActions: "fa fa-edit",
    },
    {
      id: 3,
      page_name: "For Buy",
      page_title: "Want to Buy your Dream House?",
      editActions: "fa fa-edit",
    },
    {
      id: 4,
      page_name: "For Rent",
      page_title: "Find the Perfect Rentals",
      editActions: "fa fa-edit",
    },
    {
      id: 5,
      page_name: "News & Articles",
      page_title: "News & Articles",
      editActions: "fa fa-edit",
    },
    {
      id: 6,
      page_name: "Contact Us",
      page_title: "Contact Us",
      editActions: "fa fa-edit",
    },
  ];
  constructor(private modalService: NgbModal) {}
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
  // modal
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
    // restaurant status
    status(event) {
      // for (let index = 0; index < this.company.length; index++) {
      //   if (
      //     !$(event.target).is(":checked") &&
      //     this.company[index].status == "Activate"
      //   ) {
      //     if (event.target.id == this.company[index].id) {
      //       this.company[index].status = "Deactivate";
      //     } else {
      //       this.company[index].status = "Activate";
      //     }
      //   }
      // }
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    }

 
    bannerimage="assets/1x/banners/banner1.png"
    secondSec="assets/1x/banners/banner1.png"
    thirdSec="assets/1x/banners/banner1.png"
    downloadbannerImage="assets/1x/banners/banner1.png"
    downloadImage="assets/1x/banners/banner1.png"
    DreamHouseImg = 'https://designprosusa.com/oklahoma/assets/1x/wantimg1.png'
    DreamHouseImg2 = 'https://designprosusa.com/oklahoma/assets/1x/wantimg1.png';
    playStoreSecImg = 'https://designprosusa.com/oklahoma/downloadbg.e39974ac2d80dfb20b83.png'
    //FileUpload
  readUrl(event: any, param) {
    if (event.target.files.length === 0) 
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      Swal.fire({
        title: 'Error!',
        text: 'Invalid file type',
        icon: 'error',
        confirmButtonText: 'Close',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      return} else {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this[param] = reader.result;
        return;
      };
    }
  }
  ngOnInit() {}
}
