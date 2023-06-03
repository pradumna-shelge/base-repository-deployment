import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './flight/homepage/homepage.component';
import { NavbarComponent } from './default/navbar/navbar.component';

const routes: Routes = [
{path:'flight',loadChildren:()=>import('./flight/flight.module').then(m=>m.FlightModule)},
{ path: '', component: NavbarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
