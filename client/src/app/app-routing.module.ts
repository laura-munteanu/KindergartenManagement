import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ActivitiesAdminComponent,
  ActivityAdminEditComponent,
  CalendarComponent,
  ChildAdminEditComponent,
  ChildrenAdminComponent,
  DashboardComponent,
  GroupsAdminComponent,
  GroupAdminEditComponent,
  TeachersAdminComponent,
  TeachersAdminEditComponent,

} from './components/index';

const routes: Routes = [
  {
    path: 'admin/activities',
    component: ActivitiesAdminComponent
  },
  {
    path: 'admin/activities/edit/:id',
    component: ActivityAdminEditComponent
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
    path: 'admin/groups',
    component: GroupsAdminComponent
  },
  {
    path: 'admin/groups/edit/:id',
    component: GroupAdminEditComponent
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
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
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
