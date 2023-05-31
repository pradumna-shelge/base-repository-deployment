import { Component } from '@angular/core';
import { DefaultDataService } from '../Services/default-data.service';
import { AirportModel } from '../models/Airport';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent {
  num=[1,2,3,4,5,6,7,8,9];
  model:any;
  airport:AirportModel[]=[];
  searchdata:AirportModel[]=[];
  selectedDate!:Date;
  constructor(private service:DefaultDataService){

    this.service.getAirports().subscribe((airports:AirportModel[]) =>{
      this.airport = airports
      console.log(this.airport);
      
    })
  }

  checkAirport(val:string){

 


  
  this.searchdata = this.airport.filter((airport:AirportModel) => airport.cityName.toLowerCase().match(val.toLowerCase()))
  }
 fromData:AirportModel={} as AirportModel;
 ToData:AirportModel={} as AirportModel;
 TripType=""



  from(ob:AirportModel,n:number){
    if(n==1){

      this.fromData =ob
      console.log(ob);
    }
    else{
      this.ToData =ob
      console.log(this.ToData);
    }
       
  }
  TripTypefunction(TripType:string){
    this.TripType  =TripType
  }
seatTypes='';
seatNumbers=1;
  SeatType(type:string,seats:number){
this.seatTypes = type;
this.seatNumbers = seats

  }
}
