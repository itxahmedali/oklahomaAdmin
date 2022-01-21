import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public ckEditor = "Ten Benefits Of Rentals That May Change Your Perspective";
  bannerimage="assets/1x/banners/banner1.png"
  FileUpload
  readUrl(event: any, param) {
   if (event.target.files.length === 0) return;
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
     return}
      else {
     const reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload = (_event) => {
       this[param] = reader.result;
       return;
     };
   }
 }
}
