import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  constructor(public authserv:AuthService) { }

  ngOnInit(): void {
  }

  
  logup(email:any,password:any,repassword:any){
    if(password!=repassword)
    {
      window.alert("PASSWORD AND REPASSWORD NOT MATCHED")
    }
    else
    {
      this.authserv.SignUp(email,password);
    }
  }

  tosignin()
  {
    
  }

}
