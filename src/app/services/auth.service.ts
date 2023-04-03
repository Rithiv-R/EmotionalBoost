import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public service:AngularFirestore,  public afAuth:AngularFireAuth,
    public router:Router,) { 
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

  
  async SignIn(email:string,password:string)
  {
      this.afAuth.signInWithEmailAndPassword(email,password).then((val)=>{
         this.router.navigate([""]);
     })
     .catch((error)=>{
       window.alert(error.message);
     })
  }

  async SignOut()
  {
    this.afAuth.signOut().then(()=>{
     this.router.navigate(['']);
    });
  }

  async SignUp(email:string,password:string)
  {
     this.afAuth.createUserWithEmailAndPassword(email,password).then(async (result)=>{   
     this.SetUserData(result.user).then(()=>{window.alert('User Account Registered Successfully!!');this.router.navigate(['']);});
    })
    .catch((error)=>{
      window.alert(error.message);
    })
  }

  SetUserData(user:any){
    const userRef: AngularFirestoreDocument<any> = this.service.doc(
      `users/${user.email}`
    );
    const userData = {
      uid: user.email,
      email: user.email,
    };
    return userRef.set(userData, {
      merge: true,
    });
   }   

   async ForgetPass(passowrdResetEmail:string)
   {
     return this.afAuth.sendPasswordResetEmail(passowrdResetEmail).then(()=>{
       window.alert('Password Email Sent!');
     }).catch((error)=>{
      window.alert(error);
     });
   }

}
