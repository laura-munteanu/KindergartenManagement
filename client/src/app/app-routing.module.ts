import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  TeachersAdminComponent,
  ChildrenAdminComponent,
  DashboardComponent,
  CalendarComponent,
  TeachersAdminEditComponent,
  ChildAdminEditComponent,
} from './components/index';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin/teachers',
    component: TeachersAdminComponent
  },
  {
    path: 'admin/teachers/edit/:id',
    component: TeachersAdminEditComponent
  },
  {
    path: 'admin/children',
    component: ChildrenAdminComponent
  },
  {
    path: 'admin/children/edit/:id',
    component: ChildAdminEditComponent
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
