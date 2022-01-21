import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryGridComponent implements OnInit {
  Gettoknowus = 'https://designprosusa.com/oklahoma/assets/1x/aboutusSec.png';
  reviwbanner1 = 'https://designprosusa.com/oklahoma/assets/SVG/aboutUsicon1.svg'
  reviwbanner2 = 'https://designprosusa.com/oklahoma/assets/SVG/aboutUsicon2.svg'
  reviwbanner3 = 'https://designprosusa.com/oklahoma/assets/SVG/aboutUsicon3.svg'
  downloadbannerImage="assets/1x/banners/banner1.png"
  downloadImage="assets/1x/banners/banner1.png"
  playStoreSecImg = 'https://designprosusa.com/oklahoma/downloadbg.e39974ac2d80dfb20b83.png'
  constructor(
    private modalService: NgbModal,
  ) { }
  ngOnInit() { }
  closeResult = '';
  bannerimage="assets/1x/banners/banner1.png"
  secondSec="assets/1x/banners/banner1.png"
  abouticonUpload1="assets/1x/banners/banner1.png"
  abouticonUpload2="assets/1x/banners/banner1.png"
  abouticonUpload3="assets/1x/banners/banner1.png"

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

}


