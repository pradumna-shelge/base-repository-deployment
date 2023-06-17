import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { LoaderComponent } from './loader/loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule,
    TimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
