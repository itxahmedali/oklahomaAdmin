import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { newsletteruser } from './chat/chat.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: newsletteruser
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class newsletteruserRoutingModule { }
