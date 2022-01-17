import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerArticleComponent } from './inner-article/inner-article.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'innerArticle',
        component: InnerArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
