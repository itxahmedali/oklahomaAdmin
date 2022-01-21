import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "../../../shared/shared.module";
import { LearningRoutingModule } from './learning-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ListComponent } from './list/list.component';
import { InnerArticleComponent } from './inner-article/inner-article.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { ArticleComponent } from './article/article.component';
@NgModule({
  declarations: [ListComponent, InnerArticleComponent, ArticleComponent],
  imports: [
    CommonModule,
    LearningRoutingModule,
    NgbModule,
    SharedModule,
    AngularEditorModule,
    CKEditorModule
  ]
})
export class LearningModule { }
