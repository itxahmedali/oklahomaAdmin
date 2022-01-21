import { Injectable, OnDestroy } from "@angular/core";
import { Subject, BehaviorSubject, fromEvent } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";

// Menu
export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: "root",
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search: boolean = false;

  // Language
  public language: boolean = false;

  // Mega Menu
  public megaMenu: boolean = false;
  public levelMenu: boolean = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen: boolean = false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    {
      path: "/home",
      title: "Home",
      type: "link",
      active: true,
    },
    {
      path: "/forBuy",
      title: "For Buy",
      type: "link",
    },
    {
      path: "/forSell",
      title: "For Sell",
      type: "link",
    },
    // {
    //   path: "/cms_management",
    //   title: "CMS Management",
    //   type: "link",
    // },
    {
      path: "/about",
      title: "About Us",
      type: "link",
    },
    {
      title: "News And Articles",
      type: "sub",
      children: [
        { path: "/news&articles_banner", title: "Banner", type: "link" },
        { path: "/news&articles_banner/innerArticle", title: "Articles", type: "link" },
      ],
    },
    {
      path: "/privacy",
      title: "Privacy Policy",
      type: "link",
    },
    {
      path: "/termsandcondition",
      title: "Terms Of Use",
      type: "link",
    },
    {
      path: "/contactus",
      title: "Contact Us",
      type: "link",
    },
    {
      path: "/users",
      title: "Users",
      type: "link",
    },
    {
      path: "/contactususers",
      title: "Contact Us Users",
      type: "link",
    },
    {
      path: "/gettoususers",
      title: "Get In Touch Users",
      type: "link",
    },
    {
      path: "/newsletteruserModule",
      title: "Newsletter Users",
      type: "link",
    },
    { path: "/settings", title: "Settings", type: "link" },
  ];

  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
  // megaItems = new BehaviorSubject<Menu[]>(this.MEGAMENUITEMS);
  // levelmenuitems = new BehaviorSubject<Menu[]>(this.LEVELMENUITEMS);
}
