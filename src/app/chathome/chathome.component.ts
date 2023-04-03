import { Component, OnInit, ViewChild } from '@angular/core';
import { GetchatService } from '../services/getchat.service';
import { SetchatService } from '../services/setchat.service';

@Component({
  selector: 'app-chathome',
  templateUrl: './chathome.component.html',
  styleUrls: ['./chathome.component.css']
})
export class ChathomeComponent implements OnInit {

  selected="";
  items = [
    {
      'person':'ivrith07@gmail.com',
      'last':'I am Done!',
      'time':'11.59 Pm',
    },
    {
      'person':'ivrith07@gmail.com',
      'last':'I am Done!',
      'time':'11.59 Pm',
    },
    {
      'person':'ivrith07@gmail.com',
      'last':'I am Done!',
      'time':'11.59 Pm',
    },
  ];

  messages:any=[];
  @ViewChild('mess') messageinput: any; 
  constructor(public service1:GetchatService,public service2:SetchatService) {
  }

  ngOnInit(): void {
   this.getter(this.selected);
  }

  setter(message:any)
  {
    this.service2.set(message);
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
    this.getter(this.selected); //To get the chat messages if the user changes the person of contact.
  }

}
