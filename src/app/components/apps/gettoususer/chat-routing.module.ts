import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { gettoususer } from './chat/chat.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: gettoususer
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class gettoususeruserRoutingModule { }
