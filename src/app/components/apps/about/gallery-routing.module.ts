import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: GalleryGridComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
