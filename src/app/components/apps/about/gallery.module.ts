import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { Angular2PhotoswipeModule } from 'angular2_photoswipe';
import { CrystalGalleryModule } from 'ngx-crystal-gallery';
import { NgxMasonryModule } from 'ngx-masonry';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { SharedModule } from "../../../shared/shared.module";

import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryRoutingModule } from './gallery-routing.module';

import 'hammerjs';
import 'mousetrap';


@NgModule({
  declarations: [GalleryGridComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    Angular2PhotoswipeModule,
    GalleryModule.forRoot(),
    MasonryGalleryModule,
    CrystalGalleryModule,
    NgxMasonryModule,
    SharedModule
  ]
})
export class GalleryDemoModule { }
