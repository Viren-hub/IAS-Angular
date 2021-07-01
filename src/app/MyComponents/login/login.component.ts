import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';
import{AuthenticationService} from '../../Services/authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authenticationService:AuthenticationService) { }
  ngOnInit(): void {
  }
 loginStatus :boolean=false;
  loginUser(signInForm:NgForm){
    console.log(signInForm);
    const signInData = new SignInData(signInForm.value.emailAddressField,signInForm.value.passwordValueField)
    this.authenticationService.authenticate(signInData)
  }
  

}
