import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { contactususer } from './chat/chat.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: contactususer
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class contactususerRoutingModule { }
