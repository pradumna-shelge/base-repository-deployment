import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ProfileComponent } from './User/profile/profile.component';
import { TripsComponent } from './User/trips/trips.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomepageComponent,
    SignInComponent,
    SignupComponent,
    SearchFlightsComponent,
    ProfileComponent,
    TripsComponent,
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule,

TimepickerModule
  ]
})
export class FlightModule { }
