import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NavbarComponent,
  TeachersAdminComponent,
  ChildrenAdminComponent,
  DashboardComponent,
  CalendarComponent,
  HeaderComponent,
  FooterComponent
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
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
