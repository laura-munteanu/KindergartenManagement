import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NavbarComponent,
  TeachersAdminComponent,
  TeachersAdminEditComponent,
  TeachersAdminActionsComponent,
  ChildrenAdminComponent,
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
    TeachersAdminActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([
      TeachersAdminActionsComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
