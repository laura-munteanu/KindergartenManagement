import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  TeachersAdminComponent,
  ChildrenAdminComponent,
  DashboardComponent,
  CalendarComponent,
} from './components/index';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'teachers/admin',
    component: TeachersAdminComponent
  },
  {
    path: 'children/admin',
    component: ChildrenAdminComponent,

  },
  {
    path: 'calendar',
    component: CalendarComponent,

  },
  {
    path: '',
    redirectTo: 'dashboard', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
