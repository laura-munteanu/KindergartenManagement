import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ActivitiesAdminComponent,
  ActivitiesAdminActionsComponent,
  ActivityAdminEditComponent,
  CalendarComponent,
  ChildrenAdminComponent,
  ChildrenAdminActionsComponent,
  ChildAdminEditComponent,
  DashboardComponent,
  FooterComponent,
  GroupsAdminComponent,
  GroupAdminEditComponent,
  GroupsAdminActionsComponent,
  GroupScheduleComponent,
  HeaderComponent,
  NavbarComponent,
  ScheduleCalendarAdminComponent,
  ScheduleGroupAdminComponent,
  ScheduleGroupSelectionAdminComponent,
  ScheduleTemplateAdminComponent,
  TeachersAdminComponent,
  TeachersAdminEditComponent,
  TeachersAdminActionsComponent,
} from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesAdminComponent,
    ActivitiesAdminActionsComponent,
    ActivityAdminEditComponent,
    CalendarComponent,
    ChildrenAdminComponent,
    ChildrenAdminActionsComponent,
    ChildAdminEditComponent,
    DashboardComponent,
    FooterComponent,
    GroupsAdminComponent,
    GroupAdminEditComponent,
    GroupsAdminActionsComponent,
    GroupScheduleComponent,
    HeaderComponent,
    NavbarComponent,
    ScheduleGroupSelectionAdminComponent,
    ScheduleTemplateAdminComponent,
    ScheduleGroupAdminComponent,
    ScheduleCalendarAdminComponent,
    TeachersAdminComponent,
    TeachersAdminEditComponent,
    TeachersAdminActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      ActivitiesAdminActionsComponent,
      ChildrenAdminActionsComponent,
      GroupsAdminActionsComponent,
      TeachersAdminActionsComponent
    ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
