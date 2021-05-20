import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { ImpfListComponent } from './impf-list/impf-list.component';
import { ImpfSystemService } from './shared/impf-system.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    ImpfListComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers: [ImpfSystemService]
})
export class AppModule { }
