import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { ProfileComponent } from './User/profile/profile.component';
import { TripsComponent } from './User/trips/trips.component';

const routes: Routes = [
  { path: 'flight', component: NavbarComponent,
children:[
  { path: 'home', component: HomepageComponent },
  { path: 'loginPage', component: SignInComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'searchflight', component: SearchFlightsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/searchflight' },
  { path: 'user', component: ProfileComponent,children:[
    { path: 'history', component: TripsComponent },
  
  ] },
  
] },
{ path: '', pathMatch: 'full', redirectTo: 'flight/searchflight' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
