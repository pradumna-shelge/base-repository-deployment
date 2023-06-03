import { Component, Query } from '@angular/core';
import { DefaultDataService } from 'src/app/flight/Services/default-data.service';
import { AirportModel, searchData } from 'src/app/flight/models/Airport';
import { SearchDataService } from '../search-data.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NavigationExtras, Route, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  num=[0,1,2,3,4,5,6,7,8,9];
  airport:AirportModel[]=[];
  filterAirport:AirportModel[]=[];
  searchData:searchData={} as searchData;
form :AirportModel={}as AirportModel
  to: AirportModel={}as AirportModel;
  traveltype: number=0;
  passengers: number=1;
  seatTypes="Economy";
  adults!: number;
  child!: number;
  infants!: number;
  departure!: string;
  return!: string|null;
  
  constructor(private service:DefaultDataService,private ser:SearchDataService,private route:Router){

    this.service.getAirports().subscribe((airports:AirportModel[]) =>{
      this.airport = airports
      console.log(this.airport); 
      this.form = this.airport[0],
      this.to = this.airport[3]
  

         
    })
  }

  checkAirport(val:string){
  this.filterAirport = this.airport.filter((airport:AirportModel) => airport.city.toLowerCase().match(val.toLowerCase()))
  }

  from(ob:AirportModel,n:number){
    if(n==1){
      this.form = ob;
    }
    else{
      this.to =ob
    }
       
  }
  seatNumbers=1;
  SeatType(type:string,a:string,b:string,c:string){
    this.seatTypes = type;
    this.adults = Number(a);
    this.child = Number(b);
    this.infants =Number(c);  
this.seatNumbers = Number(a)+ Number(b)+ Number(c) ;
console.log(a);

  }
  changeTrip(TripId:number){
    this.traveltype = TripId;
  }

  dates(dates:string,type:number){
    if(type == 1){
      this.departure =  dates;
     console.log(dates);
     
    }
    else{
      this.return =  dates
    }
  }

  navigate(re:string,de:string){
console.log(new Date(de+""+re));

    this.departure =  de;
    this.return =  this.traveltype==0?null: re;

    // var ob:searchData = {
    //    from:this.form,
    //    to:this.to,
    //    type:this.traveltype,
    //    seatTypes:this.seatTypes,
    //    departure:this.departure,
    //    return:this.return,
    //     adults:this.adults,
    //     child:this.child,
    //     infants:this.infants
       
    // }


const query = this.form.airportCode+"&&"+this.to.airportCode;
const query1 = this.departure+"&&"+this.return;
const query2 = this.adults+"&&"+this.child+"&&"+this.infants
const query3 = this.seatTypes+"&&"+this.traveltype

    this.route.navigate(['/flight/searchflight'],{queryParams:{route:query,time:query1,passengers:query2,traveltype:query3}})
  }
}
