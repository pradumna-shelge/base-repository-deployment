import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';

  constructor(private http:HttpClient){
    this.http.get('https://localhost:7276/api/Customers').subscribe(
      {
        next:data=>{
          console.log(data);
          
        }
      }
    )
  }
}
