import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-inner-article",
  templateUrl: "./inner-article.component.html",
  styleUrls: ["./inner-article.component.scss"],
})
export class InnerArticleComponent implements OnInit {
  public ckEditor = "Article Content";
  articles = [
    {
      img: "https://designprosusa.com/oklahoma/assets/1x/article1.png",
      title:"Ten Benefits Of Rentals That May Change Your Perspective",
      description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    },
    {
      img: "https://designprosusa.com/oklahoma/assets/1x/article5.png",
      title:"Ten Benefits Of Rentals That May Change Your Perspective",
      description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    },
    {
      img: "https://designprosusa.com/oklahoma/assets/1x/article4.png",
      title:"Ten Benefits Of Rentals That May Change Your Perspective",
      description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    },
    {
      img: "https://designprosusa.com/oklahoma/assets/1x/article3.png",
      title:"Ten Benefits Of Rentals That May Change Your Perspective",
      description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
    }
  ];
  constructor() {}
  ngOnInit(): void {}
}
