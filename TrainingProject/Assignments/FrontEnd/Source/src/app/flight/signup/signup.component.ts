import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
  this.signUpForm = this.formBuilder.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword: ['', Validators.required],
  address: ['', Validators.required],
  phone: ['', Validators.required]
  });
  }
  
  get formControls() {
  return this.signUpForm.controls;
  }
  
  onSubmit() {

  console.log(this.signUpForm.value);
  //Perform sign-up logic here
  
  console.log("not implemented");
  
  }

  get firstName() {
    return this.signUpForm.get('firstName');
    }
    
    get lastName() {
    return this.signUpForm.get('lastName');
    }
    
    get email() {
    return this.signUpForm.get('email');
    }
    
    get password() {
    return this.signUpForm.get('password');
    }
    
    get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
    }
    
    get address() {
    return this.signUpForm.get('address');
    }
    
    get phone() {
    return this.signUpForm.get('phone');
    }
  }


