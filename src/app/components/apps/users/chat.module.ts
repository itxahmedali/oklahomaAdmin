import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { SharedModule } from '../../../shared/shared.module';
import { UserRoutingModule } from './chat-routing.module';
import { CKEditorModule } from 'ngx-ckeditor';
import { UserComponent } from './chat/chat.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    PickerModule,
    EmojiModule,
    SharedModule,
    CKEditorModule,
    NgxDatatableModule
  ]
})
export class UserModule { }
