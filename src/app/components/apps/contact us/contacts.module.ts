import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';

import { ContactsComponent } from './contacts.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
