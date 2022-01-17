import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-article',
  templateUrl: './inner-article.component.html',
  styleUrls: ['./inner-article.component.scss']
})
export class InnerArticleComponent implements OnInit {
  public ckEditor = "Article Content";
  constructor() { }
  bannerimage="assets/1x/banners/banner1.png"
  
   //FileUpload
   readUrl(event: any, param) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    } else {
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
