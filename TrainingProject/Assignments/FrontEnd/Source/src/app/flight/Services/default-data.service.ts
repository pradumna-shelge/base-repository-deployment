import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AirportModel } from '../models/Airport';

@Injectable({
  providedIn: 'root'
})
export class DefaultDataService {

  constructor(private http:HttpClient) { }


  getAirports(){
     let url = "https://localhost:7007/api/Cities";
    return this.http.get<AirportModel[]>(url);
  }
  
}
