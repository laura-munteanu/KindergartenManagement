import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NavbarComponent,
  TeachersAdminComponent,
  TeachersAdminEditComponent,
  TeachersAdminActionsComponent,
  ChildrenAdminComponent,
  ChildrenAdminActionsComponent,
  ChildAdminEditComponent,
  GroupsAdminComponent,
  GroupAdminEditComponent,
  GroupsAdminActionsComponent,
  DashboardComponent,
  CalendarComponent,
  HeaderComponent,
  FooterComponent,
} from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeachersAdminComponent,
    HeaderComponent,
    FooterComponent,
    ChildrenAdminComponent,
    DashboardComponent,
    CalendarComponent,
    TeachersAdminEditComponent,
    TeachersAdminActionsComponent,
    ChildrenAdminActionsComponent,
    ChildAdminEditComponent,
    GroupsAdminComponent,
    GroupAdminEditComponent,
    GroupsAdminActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      TeachersAdminActionsComponent,
      ChildrenAdminActionsComponent,
      GroupsAdminActionsComponent
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
