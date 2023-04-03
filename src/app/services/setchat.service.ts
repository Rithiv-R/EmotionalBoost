import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SetchatService {

  constructor(public service:AngularFirestore) { }

  set(message:any)
  {
    this.service.collection("chartroom").doc("rithiv07@gmail.com&ivrith07@gmail.com").collection("messages").add(
      {
        'by':'rithiv07@gmail.com',
        'time':Number(new Date().getTime()),
        'message':message,
      }
    ).then((doc)=>{
      this.service.collection("chartroom").doc("rithiv07@gmail.com&ivrith07@gmail.com").collection("messages").doc(doc.id).update({
        'id':doc.id,
      })
    });
  }

}
