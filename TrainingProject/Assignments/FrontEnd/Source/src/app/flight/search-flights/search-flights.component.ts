import { Component, OnInit } from '@angular/core';
import { DefaultDataService } from '../Services/default-data.service';
import { AirportModel, searchData } from '../models/Airport';
import { SearchDataService } from 'src/app/default/search-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit{
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
  msg="default";
  
  constructor(private service:DefaultDataService,private ser:SearchDataService,private route:Router,private router:ActivatedRoute){

    this.service.getAirports().subscribe((airports:AirportModel[]) =>{
      this.airport = airports
      console.log(this.airport);

         
    })

    this.searchData = this.ser.getSerchValue()


  }
  ngOnInit(): void {
      this.router.queryParams.subscribe(params => {
        this.msg = params['route']+params['time']+params['passengers']
        this.msg = this.msg.split('&&').join(' ')
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

    var ob:searchData = {
       from:this.form,
       to:this.to,
       type:this.traveltype,
       seatTypes:this.seatTypes,
       departure:this.departure,
       return:this.return,
       passengers:{
        adults:this.adults,
        child:this.child,
        infants:this.infants
       }
    }

}
}
