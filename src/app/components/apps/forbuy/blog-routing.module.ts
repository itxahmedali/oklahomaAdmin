import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { single } from 'rxjs/operators';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:DetailsComponent
      },
      // {
      //   path:'single',
      //   component:SingleComponent
      // },
      // {
      //   path:'add-post',
      //   component:AddPostComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
