import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './flight/navbar/navbar.component';
import { HomepageComponent } from './flight/homepage/homepage.component';

const routes: Routes = [
{path:'',loadChildren:()=>import('./flight/flight.module').then(m=>m.FlightModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
