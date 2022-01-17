import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: GalleryGridComponent
    },
    // {
    //   path: 'gallery-desc',
    //   component: GalleryDescComponent
    // },
    // {
    //   path: 'mesonry',
    //   component: MesonryComponent
    // },
    // {
    //   path: 'hover',
    //   component: HoverEffectComponent
    // }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
