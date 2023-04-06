import { Component, OnInit, ViewChild } from '@angular/core';
import { GetchatService } from '../services/getchat.service';
import { SetchatService } from '../services/setchat.service';
import { GetlistService } from '../services/getlist.service';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {distanceBetween} from 'geofire-common' 


@Component({
  selector: 'app-chathome',
  templateUrl: './chathome.component.html',
  styleUrls: ['./chathome.component.css']
})
export class ChathomeComponent implements OnInit {

  selected="";
  items:any;
  lat:any;
  long:any;
  email:any;
  messages:any=[];
  @ViewChild('mess') messageinput: any; 
  constructor(public service1:GetchatService,public service2:SetchatService,public service3:GetlistService,public service:AngularFirestore,public auth:AngularFireAuth) {
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

  ngOnInit(): void {
   this.getter(this.selected);
   this.getnearby(2);
  }

  setter(message:any)
  {
    this.service2.set(message,this.selected);
    this.messageinput.nativeElement.value="";
  }

  getter(to:any)
  {   
    var temp:any = [];
    this.service1.get(to).subscribe((val:any)=>{
      temp = [];
      val.forEach((element:any)=>{
          temp.push(element)
      });
      this.messages = temp;
    });
  }

  change(val:any)
  {
    this.selected = val;
    this.getter(this.selected);
  }

  getnearby(current:any)
  {
    var dc =this.service.collection<any>('counsellors', ref => ref.orderBy('increment',"desc"));
    dc.valueChanges().subscribe((val)=>{
      var temp:any[] = [];
      val.forEach((element)=>{
        var t1=distanceBetween([Number(element['lat']), Number(element['long'])], [Number(this.lat),Number(this.long)]);
        if(current==0)
        {
          if(element['increment']==1)
          {
            temp.push({'email':element['id'],
            'distanceInKM':t1,
            'nickname':element['nickname'],
            'increment':element['increment'],
            'photo':element['photo'],
              }) 
          }
        }
        else if(current==1 || current==2)
        {
          if(element['increment']==2)
          {
            temp.push({'email':element['id'],
            'distanceInKM':t1,
            'nickname':element['nickname'],
            'increment':element['increment'],
            'photo':element['photo'],
              }) 
          }
        }
        else if(current==3 || current==4)
        {
          if(element['increment']==3)
          {
            temp.push({'email':element['id'],
            'distanceInKM':t1,
            'nickname':element['nickname'],
            'increment':element['increment'],
            'photo':element['photo'],
           }) 
          }
        }
       }
      )
      var sortedArray: any = temp.sort((n1,n2) => {
        if (n1.distanceInM > n2.distanceInM) {
            return 1;
        }
        if (n1.distanceInM < n2.distanceInM) {
            return -1;
        }
        return 0;
        });
      console.log(sortedArray);
      this.items = sortedArray;
    });
  }

}
