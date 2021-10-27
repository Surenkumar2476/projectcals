import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
   data:any='';
   output:any='';
   total:any;

   emi:any;
   output1:any;

   
  constructor(private xyz:Service1Service) { }

  ngOnInit(): void {
  }

  home(myval:any){
      this.data=myval;

  }
  edu(myval:any){
      this.data=myval;
  }

  veh(myval:any){
    this.data=myval;
}

  personal(myval:any){
  this.data=myval;
}

  getval(){
    this.data=this.xyz.home;
  }

  amount(principle:any,month:any,interest:any){

      this.output=(Math.round(principle*(month/12)*interest)/100);
      this.output1=this.output;

      this.emi=((principle-this.output1)/month); 

      this.total=JSON.parse(principle) + JSON.parse(this.output1) ;
      
  }

}
