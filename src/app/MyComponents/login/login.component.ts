import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginStatus :boolean=false;
  loginUser(signInForm:NgForm){
    console.log(signInForm);
    var username= signInForm.value.emailAddressField;
    var password= signInForm.value.passwordValueField;
    if(username=='admin@123' && password=='password'){
      this.router.navigate(['dashboard']);
    
     }
     else{
       alert("Incorrect username or password")
     }
  }
  constructor(private router:Router) { }
  ngOnInit(): void {
  }

}
