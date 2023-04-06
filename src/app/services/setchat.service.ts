import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SetchatService {
  email:any;
  constructor(public service:AngularFirestore,public auth:AngularFireAuth) {
    auth.authState.subscribe(userResponse=>{
      if(userResponse)
      {
        this.email = userResponse.email
      }
    })
  }

  set(message:any,counsellor:any)
  {
    this.service.collection("chartroom").doc(this.email+"&"+counsellor).set({
      'user':this.email,
      'counsellor':counsellor,
      'id':this.email+"&"+counsellor,
    }).then(()=>{
      this.service.collection("chartroom").doc(this.email+"&"+counsellor).collection("messages").add(
        {
          'by':this.email,
          'time':Number(new Date().getTime()),
          'message':message,
        }
      ).then((doc)=>{
        this.service.collection("chartroom").doc(this.email+"&"+counsellor).collection("messages").doc(doc.id).update({
          'id':doc.id,
        })
      })
    });
   
  }

}
