import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authserv:AuthService) { }

  ngOnInit(): void {
  }

  login(email:any,password:any){
    this.authserv.SignIn(email,password);
  }

}
