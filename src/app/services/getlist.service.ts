import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {distanceBetween} from 'geofire-common' 

@Injectable({
  providedIn: 'root'
})
export class GetlistService {

  email!:any;
  lat!:any;
  long!:any;
  constructor(public service:AngularFirestore,auth:AngularFireAuth,public router:Router) {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
    })
    auth.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.email = userResponse.email
      }
    })
  }

 
  

}
