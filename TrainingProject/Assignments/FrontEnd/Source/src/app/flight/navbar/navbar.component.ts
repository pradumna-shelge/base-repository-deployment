import { Component } from '@angular/core';
import { LoginServicesService } from '../Services/login-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  islog = false;
  constructor(private service : LoginServicesService){

this.service.isLogin.subscribe(login => this.islog = login)
    
  }


  change(){
    console.log(this.islog)
  }
}
