import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryGridComponent implements OnInit {


  constructor() { }

  bannerimage="assets/1x/banners/banner1.png"
  secondSec="assets/1x/banners/banner1.png"
  abouticonUpload1="assets/1x/banners/banner1.png"
  abouticonUpload2="assets/1x/banners/banner1.png"
  abouticonUpload3="assets/1x/banners/banner1.png"
  downloadbannerImage="assets/1x/banners/banner1.png"
  downloadImage="assets/1x/banners/banner1.png"

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
  ngOnInit() { }

}


