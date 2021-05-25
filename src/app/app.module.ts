import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { ImpfListComponent } from './impf-list/impf-list.component';
import { ImpfSystemService } from './shared/impf-system.service';
import { ImpfListItemComponent } from './impf-list-item/impf-list-item.component';
import { ImpfDetailsComponent } from './impf-details/impf-details.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ImpfFormComponent } from './impf-form/impf-form.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    ImpfListComponent, ImpfListItemComponent, ImpfDetailsComponent, HomeComponent, UserDetailComponent, ImpfFormComponent, AdminHomeComponent, LoginComponent,
    ],
  bootstrap:    [ AppComponent ],
  providers: [ImpfSystemService]
})
export class AppModule { }
