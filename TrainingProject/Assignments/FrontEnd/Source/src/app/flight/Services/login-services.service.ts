import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
private url = "";
private Token = "";
private obs = new BehaviorSubject<boolean>(false);
private userob = new BehaviorSubject<number>(-1);
private id = this.userob.asObservable();
// private OTP = new BehaviorSubject<number>(-1);
 isLogin = this.obs.asObservable();
 otp = '';
  constructor(private http:HttpClient,private route:Router) { }

sendOtp(val:string){
 this.http.post<string>("https://localhost:7007/getOtp",val).subscribe(data =>{
  this.otp = data;
  console.log(this.otp);
  
 }) 
}


verify(val:string){
 
  if(val ==  this.otp){
    this.obs.next(true)
  console.log(this.isLogin);
  
 
  return true;
}
return false
} 
userDAta(){
return this.http.get(""+this.id);
}
}

