import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ImpfDetailsComponent } from './impf-details/impf-details.component';
import { ImpfListComponent } from './impf-list/impf-list.component'; 
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'impfungen', component: ImpfListComponent },
{ path: 'impfungen/:id', component: ImpfDetailsComponent },
{ path: 'user/:id', component: UserDetailsComponent },
{ path: 'impfungen/:id', component: ImpfDetailsComponent },
];


@NgModule({
imports: [RouterModule.forRoot(routes)], 
exports: [RouterModule],
providers: []
})

export class AppRoutingModule { }