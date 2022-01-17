import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public isFindCourse: boolean = false;
  public isCategories: boolean = false;
  public isUpcomingCourses: boolean = false;
  
  constructor() { }
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
