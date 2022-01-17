import { Component, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import * as $ from "jquery";
@Component({
  selector: "app-team-details",
  templateUrl: "./team-details.component.html",
  styleUrls: ["./team-details.component.scss"],
})
export class TeamDetailsComponent implements OnInit {
  public url: any;
  public company = [
    {
      id: 1,
      name: "StarBucks",
      owner: "Ethel Price",
      email: "ethelprice@gmail.com",
      resgistration: "22/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-times",
      viewActions: "fa fa-eye",
      status: "Activate",
    },
    {
      id: 2,
      name: "StarBucks",
      owner: "Ethel Price",
      email: "ethelprice@gmail.com",
      resgistration: "22/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-times",
      viewActions: "fa fa-eye",
      status: "Activate",
    },
    {
      id: 3,
      name: "StarBucks",
      owner: "Ethel Price",
      email: "ethelprice@gmail.com",
      resgistration: "22/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-times",
      viewActions: "fa fa-eye",
      status: "Activate",
    },
    {
      id: 4,
      name: "StarBucks",
      owner: "Ethel Price",
      email: "ethelprice@gmail.com",
      resgistration: "22/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-times",
      viewActions: "fa fa-eye",
      status: "Activate",
    },
    {
      id: 5,
      name: "StarBucks",
      owner: "Ethel Price",
      email: "ethelprice@gmail.com",
      resgistration: "22/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-times",
      viewActions: "fa fa-eye",
      status: "Activate",
    },
    {
      id: 6,
      name: "StarBucks",
      owner: "Ethel Price",
      email: "ethelprice@gmail.com",
      resgistration: "22/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-times",
      viewActions: "fa fa-eye",
      status: "Activate",
    },
    {
      id: 7,
      name: "StarBucks",
      owner: "Ethel Price",
      email: "ethelprice@gmail.com",
      resgistration: "22/12/2022",
      editActions: "fa fa-edit",
      delActions: "fa fa-times",
      viewActions: "fa fa-eye",
      status: "Activate",
    },
  ];
  //google map
  public lat_m2: number = 52.5159;
  public lng_m2: number = 13.3777;
  public zoom_m2: number = 14;
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
  closeResult = "";
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  changeHeading(event) {
    if ($(event.target.id == "addBtn")) {
      $("#modal-basic-title").text("Add User Info");
    } else {
      return;
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
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
  }

  //FileUpload
  readUrl(event: any) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    } else {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.url = reader.result;
      };
    }
  }
  ngOnInit(): void {}
}
