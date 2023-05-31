import { Component } from '@angular/core';
import { LoginServicesService } from '../Services/login-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
constructor(private service:LoginServicesService,private route:Router){}

  OtpSend(val:string){

    this.service.sendOtp(val) 
    alert("verification Code is send")
  }
p=''
  verifyCode(val:string){
    
    if(this.service.verify(val)){
      
      this.route.navigate(['/flight/searchflight'])
    }
   

  }

OTP=false;
}
