import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ImpfDetailsComponent } from './impf-details/impf-details.component';
import { ImpfListComponent } from './impf-list/impf-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';  
import { HomeComponent } from './home/home.component';
import { ImpfFormComponent } from './impf-form/impf-form.component'; 
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'impfungen', component: ImpfListComponent },
{ path: 'impfungen/:id', component: ImpfDetailsComponent },
//{ path: 'user/:id', component: UserDetailComponent },
{ path: 'admin', component: AdminHomeComponent }, //Admin Home
{ path: 'admin/new', component: ImpfFormComponent }, //neuanlage Impfunugen
{ path: 'admin/:id', component: ImpfFormComponent }, //bearbeiten von Impfungen
{ path: 'login', component: LoginComponent },
];


@NgModule({
imports: [RouterModule.forRoot(routes)], 
exports: [RouterModule],
providers: []
})

export class AppRoutingModule { }