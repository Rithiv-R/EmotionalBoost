import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public service:AngularFirestore) { 
  }

  set(){
    this.service.collection("chartroom").doc("rithiv07@gmail.com&ivrith07@gmail.com").collection("messages").add(
      {
        'by':'ivrith07@gmail.com',
        'time':Number(new Date().getTime()),
        'message':"I am done",
      }
    ).then((doc)=>{
      this.service.collection("chartroom").doc("rithiv07@gmail.com&ivrith07@gmail.com").collection("messages").doc(doc.id).update({
        'id':doc.id,
      })
    });
  }

  get()
  {
    var x = this.service.collection("chartroom").doc("rithiv07@gmail.com&ivrith07@gmail.com").collection<any>('messages', ref => ref.orderBy('time',"asc"));
    x.valueChanges().subscribe((val)=>{
      val.forEach((element)=>{
        if(element.by=="rithiv07@gmail.com")
        {
          console.log("rithiv07@gmail.com");
          console.log(element);
        }
        else
        {
          console.log("ivrith07@gmail.com");
          console.log(element);
        }
      })
    });
  }

  

}
