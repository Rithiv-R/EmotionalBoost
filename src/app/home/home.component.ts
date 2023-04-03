import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  check1()
  {
    const current = new Date();
    const timestamp = current.getTime(); //12637839012637
    const val = current.toLocaleDateString("en-us") //4-07-2023
    console.log(timestamp);
    console.log(current.getHours()+" "+current.getMinutes()+" "+current.getSeconds());
  }


  check2()
  {
    this.auth.get();
  }

  check3()
  {
    this.auth.set();
  }

}
