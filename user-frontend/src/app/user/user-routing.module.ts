import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'list',
    pathMatch: "full",
  },
  {
    path:'list',
    component:UserListComponent
  },
  {
    path:'create',
    component:CreateUserComponent
  },
  {
    path:'edit/:id',
    component:EditUserComponent
  },
  {
    path:':id',
    component:UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
