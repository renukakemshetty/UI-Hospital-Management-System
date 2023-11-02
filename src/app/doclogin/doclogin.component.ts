import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent implements OnInit {

     username = 'Sony'
    password = ''
    invalidLogin = false

  constructor(private router:Router, public loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {

     if(!(this.username.length>0 )){
        this.invalidLogin = true;
         alert("Please Enter Username");
         this.router.navigate(['home'])
     }else if(!(this.password.length>0)){
      this.invalidLogin = true;
      alert("Please Enter Password");
      this.router.navigate(['home'])
     }else if(this.loginservice.authenticate(this.username, this.password)
    ) 
  {
      this.router.navigate(['docdash'])
      
      this.invalidLogin = false;
    } else
    {
      this.invalidLogin = true;
      alert("Invalid Credentials");
      this.router.navigate(['home'])
    }
      
  }

}
