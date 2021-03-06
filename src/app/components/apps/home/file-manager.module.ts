import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../shared/shared.module";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager.component';
import { CountToModule } from 'angular-count-to';
import { NgApexchartsModule } from 'ng-apexcharts';
import Swal from 'sweetalert2'
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FileManagerRoutingModule,
    NgxDatatableModule,
    NgApexchartsModule,
    CountToModule,
  ],
  declarations: [FileManagerComponent]
})
export class FileManagerModule { }
