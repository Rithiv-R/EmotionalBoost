import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetchatService {

  constructor(public service:AngularFirestore) { }


  get(to:any)
  {
    /*
    var temp:any = [];
    var x = this.service.collection("chartroom").doc("rithiv07@gmail.com&ivrith07@gmail.com").collection<any>('messages', ref => ref.orderBy('time',"asc"));
    x.valueChanges().subscribe((val)=>{
      val.forEach((element)=>{
        temp.push(element)
      });
    });
    return temp;
    */
    var x = this.service.collection("chartroom").doc("rithiv07@gmail.com&"+to).collection<any>('messages', ref => ref.orderBy('time',"asc")).valueChanges();
    return x;
  }

}
