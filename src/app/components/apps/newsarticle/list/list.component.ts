import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  closeResult = '';
  public isFindCourse: boolean = false;
  public isCategories: boolean = false;
  public isUpcomingCourses: boolean = false;
  constructor(private modalService: NgbModal) { }
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
  bannerimage="assets/1x/banners/banner1.png"
  articleThumbnail1="assets/1x/banners/banner1.png"
  articleThumbnail2="assets/1x/banners/banner1.png"
  articleThumbnail3="assets/1x/banners/banner1.png"
  articleThumbnail4="assets/1x/banners/banner1.png"
  articleThumbnail5="assets/1x/banners/banner1.png"
  articleThumbnail6="assets/1x/banners/banner1.png"
  articleThumbnail7="assets/1x/banners/banner1.png"
  
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
  ngOnInit(): void {
    
  }

}
