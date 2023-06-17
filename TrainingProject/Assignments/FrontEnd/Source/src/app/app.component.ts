import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoaderService } from './loader/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loader:LoaderService,private router : Router){

this.navigate();

  }
get Flag(){
return this.loader.flag;
}



navigate(){
  this.loader.setFlags(true);
  setTimeout(() => {this.loader.setFlags(false); this.router.navigate(['/user'] );},3000)
 
}

}
